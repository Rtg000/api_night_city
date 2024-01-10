import { Module } from '@nestjs/common';
import { FixerService } from './fixer.service';
import { FixerController } from './fixer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fixer } from './entities/fixer.entity';

@Module({
  controllers: [FixerController],
  providers: [FixerService],
  imports: [
    TypeOrmModule.forFeature([Fixer])
  ],
  exports: [ FixerService, TypeOrmModule ]
})
export class FixerModule {}
