import { Injectable } from '@nestjs/common';
import { CreateDistritoDto } from './dto/create-distrito.dto';
import { UpdateDistritoDto } from './dto/update-distrito.dto';

@Injectable()
export class DistritoService {
  create(createDistritoDto: CreateDistritoDto) {
    return 'This action adds a new distrito';
  }

  findAll() {
    return `This action returns all distrito`;
  }

  findOne(id: number) {
    return `This action returns a #${id} distrito`;
  }

  update(id: number, updateDistritoDto: UpdateDistritoDto) {
    return `This action updates a #${id} distrito`;
  }

  remove(id: number) {
    return `This action removes a #${id} distrito`;
  }
}
