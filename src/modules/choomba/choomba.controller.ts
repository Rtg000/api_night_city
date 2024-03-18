import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { ChoombaService } from './choomba.service';
import { CreateChoombaDto } from './dto/create-choomba.dto';
import { UpdateChoombaDto } from './dto/update-choomba.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('choomba')
@Controller('choomba')
// @UseGuards(AuthGuard('jwt')) // JWT Token a nivel de controlador
export class ChoombaController {
  constructor(private readonly choombaService: ChoombaService) {}

  @Post()
  // @UseGuards(AuthGuard('jwt'))
  create(@Body() createChoombaDto: CreateChoombaDto) {
    return this.choombaService.create(createChoombaDto);
  }

  @Get()
  findAll() {
    return this.choombaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.choombaService.findOne(id);
  }

  @Patch(':id')
  // @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateChoombaDto: UpdateChoombaDto) {
    return this.choombaService.update(id, updateChoombaDto);
  }

  @Delete(':id')
  // @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.choombaService.remove(id);
  }
}
