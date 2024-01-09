import { Injectable, InternalServerErrorException, Post } from '@nestjs/common';
import { CreateCorpoDto } from './dto/create-corpo.dto';
import { UpdateCorpoDto } from './dto/update-corpo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Corpo } from './entities/corpo.entity';

@Injectable()
export class CorpoService {
  constructor(
    @InjectRepository(Corpo)
    private readonly corpoRepository: Repository<Corpo>
  ){

  }
  
  @Post()
  async create(createCorpoDto: CreateCorpoDto) {
    try{
      const corpo = this.corpoRepository.create(createCorpoDto);
      await this.corpoRepository.save(corpo); 
    return{
      msg: 'Registro insertado',
      data: corpo,
      status: 200
    };
    }catch(error){
      console.log(error);
      throw new InternalServerErrorException('Bruh corpo')
    }
  }

  // create(createCorpoDto: CreateCorpoDto) {
  //   return 'This action adds a new corpo';
  // }

  findAll() {
    return `This action returns all corpo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} corpo`;
  }

  update(id: number, updateCorpoDto: UpdateCorpoDto) {
    return `This action updates a #${id} corpo`;
  }

  remove(id: number) {
    return `This action removes a #${id} corpo`;
  }
}
