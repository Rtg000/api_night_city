import { Injectable, InternalServerErrorException, Post } from '@nestjs/common';
import { CreateCyberwareDto } from './dto/create-cyberware.dto';
import { UpdateCyberwareDto } from './dto/update-cyberware.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Cyberware } from './entities/cyberware.entity';

@Injectable()
export class CyberwareService {
  constructor(
    @InjectRepository(Cyberware)
    private readonly cyberwareRepository: Repository<Cyberware>
  ){

  }
  
  @Post()
  async create(createCyberwareDto: CreateCyberwareDto) {
    try{
      const cyberware = this.cyberwareRepository.create(createCyberwareDto);
      await this.cyberwareRepository.save(cyberware); 
    return{
      msg: 'Registro insertado',
      data: cyberware,
      status: 200
    };
    }catch(error){
      console.log(error);
      throw new InternalServerErrorException('Error al crear cyberware')
    }
  }

  async deleteAllCyberware(){
    const query = this.cyberwareRepository.createQueryBuilder('cyberware');
    try{
      return await query
        .delete()
        .where({})
        .execute()
    }catch{
      throw new InternalServerErrorException('Error al borrar cyberware')
    }
  }

  findOne(id: string) {
    const cyberware = this.cyberwareRepository.findOne({
      where:{
        id
      }
    });
    return cyberware;
  }

  async findAll() {
    try {
      const cyberware = await this.cyberwareRepository.find()
      // return {
      //   data: cyberware,
      //   message: 'Listado de cyberwares',
      //   status: 200
      // }
      return cyberware
    }catch(error){
      throw new InternalServerErrorException('Error al listar cyberwares')
    }
  }

  async remove(id: string){
    try{
      const cyberware = await this.cyberwareRepository.findOneBy({id});
      return await this.cyberwareRepository.remove(cyberware);
    }catch(error){
      throw new InternalServerErrorException(`Error, cyberware con id ${id} no encontrado`)
    }
  }

  async update(id: string, updateCyberwareDto: UpdateCyberwareDto) {
    try {
      const cyberware = await this.cyberwareRepository.findOne({
        where: { id }
      })
      this.cyberwareRepository.merge(cyberware, updateCyberwareDto);
      await this.cyberwareRepository.save(cyberware);
      return {
        message: `Cyberware con ID ${id} actualizado correctamente`,
        data: cyberware,
        status: 200,
      };
    } catch (error) {
      throw new InternalServerErrorException('Error al actualizar cyberware.');
    }
  }

}
