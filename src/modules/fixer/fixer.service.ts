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
      throw new InternalServerErrorException('Bruh fixer')
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
      throw new InternalServerErrorException('Bruh borrado fixer')
    }
  }
  
  // create(createFixerDto: CreateFixerDto) {
  //   return 'This action adds a new fixer';
  // }

  findAll() {
    return `This action returns all fixer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fixer`;
  }

  update(id: number, updateFixerDto: UpdateFixerDto) {
    return `This action updates a #${id} fixer`;
  }

  remove(id: number) {
    return `This action removes a #${id} fixer`;
  }
}
