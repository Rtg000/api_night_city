import { Module } from '@nestjs/common';
import { DistritoService } from './distrito.service';
import { DistritoController } from './distrito.controller';

@Module({
  controllers: [DistritoController],
  providers: [DistritoService],
})
export class DistritoModule {}
