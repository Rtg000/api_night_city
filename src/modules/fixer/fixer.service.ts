import { Injectable, InternalServerErrorException, Post } from '@nestjs/common';
import { CreateFixerDto } from './dto/create-fixer.dto';
import { UpdateFixerDto } from './dto/update-fixer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Fixer } from './entities/fixer.entity';
import { Repository } from 'typeorm';
import { DistritoService } from '../distrito/distrito.service';

@Injectable()
export class FixerService {
  constructor(
    @InjectRepository(Fixer)
    private readonly fixerRepository: Repository<Fixer>,
    private readonly distritoService: DistritoService
  ){

  }
  
  async create(createFixerDto: CreateFixerDto) {
    try{
      const {distrito, ...campos} = createFixerDto;
      const fixer = this.fixerRepository.create({...campos});
      const distritoobj = await this.distritoService.findOne(distrito);
      fixer.distrito = distritoobj
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
      },
      relations: {
        distrito: true
      }
    });
    return fixer;
  }

  async findAll() {
    try {
      const fixer = await this.fixerRepository.find({
      relations: {
        distrito: true
      }
      });
      // return {
      //   data: fixer,
      //   message: 'Listado de fixers',
      //   status: 200
      // }
      return fixer
    }catch(error){
      throw new InternalServerErrorException('Error al listar fixers')
    }
  }

  async remove(id: string){
    try{
      const fixer = await this.fixerRepository.findOneBy({id});
      return await this.fixerRepository.remove(fixer);
    }catch(error){
      throw new InternalServerErrorException(`Error, fixer con id ${id} no encontrado`)
    }
  }

  async update(id: string, updateFixerDto: UpdateFixerDto) {
    try {
      const fixer = await this.fixerRepository.findOne({
        where: { id }
      })
      // this.fixerRepository.merge(fixer, updateFixerDto);
      await this.fixerRepository.save(fixer);
      return {
        message: `Fixer con ID ${id} actualizado correctamente`,
        data: fixer,
        status: 200,
      };
    } catch (error) {
      throw new InternalServerErrorException('Error al actualizar fixer.');
    }
  }
  
}
