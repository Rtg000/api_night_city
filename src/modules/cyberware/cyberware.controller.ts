import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CyberwareService } from './cyberware.service';
import { CreateCyberwareDto } from './dto/create-cyberware.dto';
import { UpdateCyberwareDto } from './dto/update-cyberware.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('cyberware')
@Controller('cyberware')
export class CyberwareController {
  constructor(private readonly cyberwareService: CyberwareService) {}

  @Post()
  create(@Body() createCyberwareDto: CreateCyberwareDto) {
    return this.cyberwareService.create(createCyberwareDto);
  }

  @Get()
  findAll() {
    return this.cyberwareService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cyberwareService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCyberwareDto: UpdateCyberwareDto) {
    return this.cyberwareService.update(id, updateCyberwareDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cyberwareService.remove(id);
  }
}
