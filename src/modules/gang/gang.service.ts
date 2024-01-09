import { Injectable } from '@nestjs/common';
import { CreateGangDto } from './dto/create-gang.dto';
import { UpdateGangDto } from './dto/update-gang.dto';

@Injectable()
export class GangService {
  create(createGangDto: CreateGangDto) {
    return 'This action adds a new gang';
  }

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
