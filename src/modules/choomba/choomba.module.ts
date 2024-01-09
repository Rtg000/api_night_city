import { Module } from '@nestjs/common';
import { ChoombaService } from './choomba.service';
import { ChoombaController } from './choomba.controller';
import { Choomba } from './entities/choomba.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ChoombaController],
  providers: [ChoombaService],
  imports: [
    TypeOrmModule.forFeature([Choomba])
  ],
  exports: [ ChoombaService, TypeOrmModule ]
})

export class ChoombaModule {}
