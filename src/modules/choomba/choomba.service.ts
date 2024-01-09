import { Injectable } from '@nestjs/common';
import { CreateChoombaDto } from './dto/create-choomba.dto';
import { UpdateChoombaDto } from './dto/update-choomba.dto';

@Injectable()
export class ChoombaService {
  create(createChoombaDto: CreateChoombaDto) {
    return 'This action adds a new choomba';
  }

  findAll() {
    return `This action returns all choomba`;
  }

  findOne(id: number) {
    return `This action returns a #${id} choomba`;
  }

  update(id: number, updateChoombaDto: UpdateChoombaDto) {
    return `This action updates a #${id} choomba`;
  }

  remove(id: number) {
    return `This action removes a #${id} choomba`;
  }
}
