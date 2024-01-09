import { Module } from '@nestjs/common';
import { GangService } from './gang.service';
import { GangController } from './gang.controller';

@Module({
  controllers: [GangController],
  providers: [GangService],
})
export class GangModule {}
