import { Injectable, InternalServerErrorException, Post } from '@nestjs/common';
import { CreateDistritoDto } from './dto/create-distrito.dto';
import { UpdateDistritoDto } from './dto/update-distrito.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Distrito } from './entities/distrito.entity';

@Injectable()
export class DistritoService {
  constructor(
    @InjectRepository(Distrito)
    private readonly distritoRepository: Repository<Distrito>
  ){

  }
  
  @Post()
  async create(createDistritoDto: CreateDistritoDto) {
    try{
      const distrito = this.distritoRepository.create(createDistritoDto);
      await this.distritoRepository.save(distrito); 
    return{
      msg: 'Registro insertado',
      data: distrito,
      status: 200
    };
    }catch(error){
      console.log(error);
      throw new InternalServerErrorException('Error al crear distrito')
    }
  }

  async deleteAllDistrito(){
    const query = this.distritoRepository.createQueryBuilder('distrito');
    try{
      return await query
        .delete()
        .where({})
        .execute()
    }catch{
      throw new InternalServerErrorException('Error al borrar distrito')
    }
  }

  findOne(id: string) {
    const distrito = this.distritoRepository.findOne({
      where:{
        id
      }
    });
    return distrito;
  }

  async findAll() {
    try {
      const distrito = await this.distritoRepository.find()
      return {
        data: distrito,
        message: 'Listado de distritos',
        status: 200
      }
    }catch(error){
      throw new InternalServerErrorException('Error al listar distritos')
    }
  }

  async remove(id: string){
    try{
      const distrito = await this.distritoRepository.findOneBy({id});
      return await this.distritoRepository.remove(distrito);
    }catch(error){
      throw new InternalServerErrorException(`Error, distrito con id ${id} no encontrado`)
    }
  }

  update(id: number, updateDistritoDto: UpdateDistritoDto) {
    return `This action updates a #${id} distrito`;
  }
}
