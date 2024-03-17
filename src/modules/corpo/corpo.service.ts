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
      throw new InternalServerErrorException('Error al crear corpo')
    }
  }

  async deleteAllCorpo(){
    const query = this.corpoRepository.createQueryBuilder('corpo');
    try{
      return await query
        .delete()
        .where({})
        .execute()
    }catch{
      throw new InternalServerErrorException('Error al borrar corpo')
    }
  }

  findOne(id: string) {
    const corpo = this.corpoRepository.findOne({
      where:{
        id
      }
    });
    return corpo;
  }

  async findAll() {
    try {
      const corpo = await this.corpoRepository.find()
      // return {
      //   data: corpo,
      //   message: 'Listado de corpos',
      //   status: 200
      // }
      return corpo
    }catch(error){
      throw new InternalServerErrorException('Error al listar corpos')
    }
  }

  async remove(id: string){
    try{
      const corpo = await this.corpoRepository.findOneBy({id});
      return await this.corpoRepository.remove(corpo);
    }catch(error){
      throw new InternalServerErrorException(`Error, corpo con id ${id} no encontrado`)
    }
  }

  async update(id: string, updateCorpoDto: UpdateCorpoDto) {
    try {
      const corpo = await this.corpoRepository.findOne({
        where: { id }
      })
      this.corpoRepository.merge(corpo, updateCorpoDto);
      await this.corpoRepository.save(corpo);
      return {
        message: `Corpo con ID ${id} actualizado correctamente`,
        data: corpo,
        status: 200,
      };
    } catch (error) {
      throw new InternalServerErrorException('Error al actualizar corpo.');
    }
  }

}
