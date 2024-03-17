import { Injectable, InternalServerErrorException, Post } from '@nestjs/common';
import { CreateChoombaDto } from './dto/create-choomba.dto';
import { UpdateChoombaDto } from './dto/update-choomba.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Choomba } from './entities/choomba.entity';
import { GangService } from '../gang/gang.service';

@Injectable()
export class ChoombaService {
  constructor(
    @InjectRepository(Choomba)
    private readonly choombaRepository: Repository<Choomba>,
    private readonly gangService: GangService
  ){

  }
  
  async create(createChoombaDto: CreateChoombaDto) {
    try{
      const {gang, ...campos} = createChoombaDto;
      const choomba = this.choombaRepository.create({...campos});
      const gangobj = await this.gangService.findOne(gang);
      choomba.gang = gangobj;
      await this.choombaRepository.save(choomba); 
      // console.log(choomba);
    return{
      msg: 'Registro insertado',
      data: choomba,
      status: 200
    };
    }catch(error){
      console.log(error);
      throw new InternalServerErrorException('Error al crear choomba')
    }
  }

  async deleteAllChoomba(){
    const query = this.choombaRepository.createQueryBuilder('choomba');
    try{
      return await query
        .delete()
        .where({})
        .execute()
    }catch{
      throw new InternalServerErrorException('Error al borrar choomba')
    }
  }

  findOne(id: string) {
    const choomba = this.choombaRepository.findOne({
      where:{
        id
      },
      relations: {
        gang: true
      }
    });
    return choomba;
  }

  async findAll() {
    try {
      const choomba = await this.choombaRepository.find({
        relations: {
          gang: true
        }
      });
      // return {
      //   data: choomba,
      //   message: 'Listado de choombas',
      //   status: 200
      // }
      return choomba
    }catch(error){
      throw new InternalServerErrorException('Error al listar choombas')
    }
  }

  async remove(id: string){
    try{
      const choomba = await this.choombaRepository.findOneBy({id});
      return await this.choombaRepository.remove(choomba);
    }catch(error){
      throw new InternalServerErrorException(`Error, choomba con id ${id} no encontrado`)
    }
  }

  async update(id: string, updateChoombaDto: UpdateChoombaDto) {
    try {
      const choomba = await this.choombaRepository.findOne({
        where: { id }
      })
      // this.choombaRepository.merge(choomba, updateChoombaDto);
      await this.choombaRepository.save(choomba);
      return {
        message: `Choomba con ID ${id} actualizado correctamente`,
        data: choomba,
        status: 200,
      };
    } catch (error) {
      throw new InternalServerErrorException('Error al actualizar choomba.');
    }
  }

}
