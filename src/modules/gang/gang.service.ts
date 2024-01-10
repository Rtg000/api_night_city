import { Injectable, InternalServerErrorException, Post } from '@nestjs/common';
import { CreateGangDto } from './dto/create-gang.dto';
import { UpdateGangDto } from './dto/update-gang.dto';
import { Repository } from 'typeorm';
import { Gang } from './entities/gang.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GangService {
  constructor(
    @InjectRepository(Gang)
    private readonly gangRepository: Repository<Gang>
  ){

  }
  
  @Post()
  async create(createGangDto: CreateGangDto) {
    try{
      const gang = this.gangRepository.create(createGangDto);
      await this.gangRepository.save(gang); 
    return{
      msg: 'Registro insertado',
      data: gang,
      status: 200
    };
    }catch(error){
      console.log(error);
      throw new InternalServerErrorException('Error al crear gang')
    }
  }

  async deleteAllGang(){
    const query = this.gangRepository.createQueryBuilder('gang');
    try{
      return await query
        .delete()
        .where({})
        .execute()
    }catch{
      throw new InternalServerErrorException('Error al borrar gang')
    }
  }

  findOne(id: string) {
    const gang = this.gangRepository.findOne({
      where:{
        id
      }
    });
    return gang;
  }

  async findAll() {
    try {
      const gang = await this.gangRepository.find()
      return {
        data: gang,
        message: 'Listado de gangs',
        status: 200
      }
    }catch(error){
      throw new InternalServerErrorException('Error al listar gangs')
    }
  }

  update(id: number, updateGangDto: UpdateGangDto) {
    return `This action updates a #${id} gang`;
  }

  remove(id: number) {
    return `This action removes a #${id} gang`;
  }
}
