import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChoombaService } from './choomba.service';
import { CreateChoombaDto } from './dto/create-choomba.dto';
import { UpdateChoombaDto } from './dto/update-choomba.dto';

@Controller('choomba')
export class ChoombaController {
  constructor(private readonly choombaService: ChoombaService) {}

  @Post()
  create(@Body() createChoombaDto: CreateChoombaDto) {
    return this.choombaService.create(createChoombaDto);
  }

  @Get()
  findAll() {
    return this.choombaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.choombaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChoombaDto: UpdateChoombaDto) {
    return this.choombaService.update(+id, updateChoombaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.choombaService.remove(+id);
  }
}
