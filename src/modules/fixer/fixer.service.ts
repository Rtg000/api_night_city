import { Injectable, InternalServerErrorException, Post } from '@nestjs/common';
import { CreateFixerDto } from './dto/create-fixer.dto';
import { UpdateFixerDto } from './dto/update-fixer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Fixer } from './entities/fixer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FixerService {
  constructor(
    @InjectRepository(Fixer)
    private readonly fixerRepository: Repository<Fixer>
  ){

  }
  
  @Post()
  async create(createFixerDto: CreateFixerDto) {
    try{
      const fixer = this.fixerRepository.create(createFixerDto);
      await this.fixerRepository.save(fixer); 
    return{
      msg: 'Registro insertado',
      data: fixer,
      status: 200
    };
    }catch(error){
      console.log(error);
      throw new InternalServerErrorException('Error al crear fixer')
    }
  }

  async deleteAllFixer(){
    const query = this.fixerRepository.createQueryBuilder('fixer');
    try{
      return await query
        .delete()
        .where({})
        .execute()
    }catch{
      throw new InternalServerErrorException('Error al borrar fixer')
    }
  }

  findOne(id: string) {
    const fixer = this.fixerRepository.findOne({
      where:{
        id
      }
    });
    return fixer;
  }

  async findAll() {
    try {
      const fixer = await this.fixerRepository.find()
      return {
        data: fixer,
        message: 'Listado de fixers',
        status: 200
      }
    }catch(error){
      throw new InternalServerErrorException('Error al listar fixers')
    }
  }

  update(id: number, updateFixerDto: UpdateFixerDto) {
    return `This action updates a #${id} fixer`;
  }

  remove(id: number) {
    return `This action removes a #${id} fixer`;
  }
}
