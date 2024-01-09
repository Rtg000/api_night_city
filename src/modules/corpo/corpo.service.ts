import { Injectable } from '@nestjs/common';
import { CreateCorpoDto } from './dto/create-corpo.dto';
import { UpdateCorpoDto } from './dto/update-corpo.dto';

@Injectable()
export class CorpoService {
  create(createCorpoDto: CreateCorpoDto) {
    return 'This action adds a new corpo';
  }

  findAll() {
    return `This action returns all corpo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} corpo`;
  }

  update(id: number, updateCorpoDto: UpdateCorpoDto) {
    return `This action updates a #${id} corpo`;
  }

  remove(id: number) {
    return `This action removes a #${id} corpo`;
  }
}
