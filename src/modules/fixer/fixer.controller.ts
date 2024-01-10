import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FixerService } from './fixer.service';
import { CreateFixerDto } from './dto/create-fixer.dto';
import { UpdateFixerDto } from './dto/update-fixer.dto';

@Controller('fixer')
export class FixerController {
  constructor(private readonly fixerService: FixerService) {}

  @Post()
  create(@Body() createFixerDto: CreateFixerDto) {
    return this.fixerService.create(createFixerDto);
  }

  @Get()
  findAll() {
    return this.fixerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fixerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFixerDto: UpdateFixerDto) {
    return this.fixerService.update(+id, updateFixerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fixerService.remove(+id);
  }
}
