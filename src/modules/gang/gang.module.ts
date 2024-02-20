import { Module } from '@nestjs/common';
import { GangService } from './gang.service';
import { GangController } from './gang.controller';
import { Gang } from './entities/gang.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [GangController],
  providers: [GangService],
  imports: [
    TypeOrmModule.forFeature([Gang])
  ],
  exports: [ GangService, TypeOrmModule ]
})
export class GangModule {}
