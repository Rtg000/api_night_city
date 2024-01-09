import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CorpoService } from './corpo.service';
import { CreateCorpoDto } from './dto/create-corpo.dto';
import { UpdateCorpoDto } from './dto/update-corpo.dto';

@Controller('corpo')
export class CorpoController {
  constructor(private readonly corpoService: CorpoService) {}

  @Post()
  create(@Body() createCorpoDto: CreateCorpoDto) {
    return this.corpoService.create(createCorpoDto);
  }

  @Get()
  findAll() {
    return this.corpoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.corpoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCorpoDto: UpdateCorpoDto) {
    return this.corpoService.update(+id, updateCorpoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.corpoService.remove(+id);
  }
}
