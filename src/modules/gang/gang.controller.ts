import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GangService } from './gang.service';
import { CreateGangDto } from './dto/create-gang.dto';
import { UpdateGangDto } from './dto/update-gang.dto';

@Controller('gang')
export class GangController {
  constructor(private readonly gangService: GangService) {}

  @Post()
  create(@Body() createGangDto: CreateGangDto) {
    return this.gangService.create(createGangDto);
  }

  @Get()
  findAll() {
    return this.gangService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gangService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGangDto: UpdateGangDto) {
    return this.gangService.update(+id, updateGangDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gangService.remove(+id);
  }
}
