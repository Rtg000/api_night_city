import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserRepository } from '../user/entities/user.repository';
import { LoginAuthDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { User } from '../user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  // create(createAuthDto: CreateAuthDto) {
  //   return 'This action adds a new auth';
  // }
  constructor(
    private readonly UserRepository: UserRepository,
    // private readonly rolRepository: RolRepository,
    private readonly jwtService: JwtService
  ){}

  async login(loginDto: LoginAuthDto){
    const user = await this.UserRepository.findByEmail(loginDto.email);
    if (!user){
      throw new NotFoundException('El usuario no existe')
    }
    let isValidPassword;
    try{
      isValidPassword = await this.isMatch(loginDto.password, user.password)
      console.log(loginDto.password,user.password,isValidPassword)
    }catch(error){
      throw new InternalServerErrorException('Error al validar password')
    }
    if (isValidPassword){
      return {
        msg: 'Usuario validado',
        status: 200,
        user: user,
        token: this.getAccessToken(user)
      }
    }else{
      return 'Login fallido'
    }
  }

  async register(registerDto: RegisterAuthDto){
    console.log(registerDto)
    // const { username, email, password } = registerDto;
    if (await this.UserRepository.findByEmail(registerDto.email)){
      throw new BadRequestException('El email existe en la base de datos')
    }

    if (await this.UserRepository.findByUsername(registerDto.username)){
      throw new BadRequestException('El username existe en la base de datos')
    }

    try{
      registerDto.password = await this.getHash(registerDto.password)
      return this.UserRepository.save(registerDto);
    }catch(error){
      throw new InternalServerErrorException('Error al crear el registro')
    }
  }

  async getHash(password: string){
    return await bcrypt.hash(password, 10);
  }

  async isMatch(password: string, hash: string){
    return await bcrypt.compare(password, hash)
  }

  private getAccessToken(user: User){
    try{
      const accessToken = this.jwtService.sign({
        id: user.id,
        name: user.username,
        email: user.email
      });
      return{
        token: accessToken
      }
    }catch(error){
      throw new InternalServerErrorException('Error al crear token')
    }
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
