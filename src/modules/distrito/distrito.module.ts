import { Module } from '@nestjs/common';
import { DistritoService } from './distrito.service';
import { DistritoController } from './distrito.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Distrito } from './entities/distrito.entity';

@Module({
  controllers: [DistritoController],
  providers: [DistritoService],
  imports:[
    TypeOrmModule.forFeature([Distrito])
  ],
  exports: [ DistritoService, TypeOrmModule ]
})
export class DistritoModule {}
