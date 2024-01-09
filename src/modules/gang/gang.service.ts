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
      throw new InternalServerErrorException('Bruh gang')
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
      throw new InternalServerErrorException('Bruh borrado gang')
    }
  }

  // create(createGangDto: CreateGangDto) {
  //   return 'This action adds a new gang';
  // }

  findAll() {
    return `This action returns all gang`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gang`;
  }

  update(id: number, updateGangDto: UpdateGangDto) {
    return `This action updates a #${id} gang`;
  }

  remove(id: number) {
    return `This action removes a #${id} gang`;
  }
}
