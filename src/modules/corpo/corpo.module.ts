import { Module } from '@nestjs/common';
import { CorpoService } from './corpo.service';
import { CorpoController } from './corpo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Corpo } from './entities/corpo.entity';

@Module({
  controllers: [CorpoController],
  providers: [CorpoService],
  imports: [
    TypeOrmModule.forFeature([Corpo])
  ],
  exports: [ CorpoService, TypeOrmModule ]
})
export class CorpoModule {}
