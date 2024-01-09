import { Module } from '@nestjs/common';
import { CorpoService } from './corpo.service';
import { CorpoController } from './corpo.controller';

@Module({
  controllers: [CorpoController],
  providers: [CorpoService],
})
export class CorpoModule {}
