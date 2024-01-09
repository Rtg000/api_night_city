import { Module } from '@nestjs/common';
import { ChoombaService } from './choomba.service';
import { ChoombaController } from './choomba.controller';

@Module({
  controllers: [ChoombaController],
  providers: [ChoombaService],
})
export class ChoombaModule {}
