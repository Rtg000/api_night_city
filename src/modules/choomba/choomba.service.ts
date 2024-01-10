import { Injectable, InternalServerErrorException, Post } from '@nestjs/common';
import { CreateChoombaDto } from './dto/create-choomba.dto';
import { UpdateChoombaDto } from './dto/update-choomba.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Choomba } from './entities/choomba.entity';

@Injectable()
export class ChoombaService {
  constructor(
    @InjectRepository(Choomba)
    private readonly choombaRepository: Repository<Choomba>
  ){

  }
  
  @Post()
  async create(createChoombaDto: CreateChoombaDto) {
    try{
      const choomba = this.choombaRepository.create(createChoombaDto);
      await this.choombaRepository.save(choomba); 
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
      }
    });
    return choomba;
  }

  async findAll() {
    try {
      const choomba = await this.choombaRepository.find()
      return {
        data: choomba,
        message: 'Listado de choombas',
        status: 200
      }
    }catch(error){
      throw new InternalServerErrorException('Error al listar choombas')
    }
  }

  update(id: number, updateChoombaDto: UpdateChoombaDto) {
    return `This action updates a #${id} choomba`;
  }

  remove(id: number) {
    return `This action removes a #${id} choomba`;
  }
}
