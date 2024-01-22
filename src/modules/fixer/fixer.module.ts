import { Module } from '@nestjs/common';
import { FixerService } from './fixer.service';
import { FixerController } from './fixer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fixer } from './entities/fixer.entity';
import { DistritoModule } from '../distrito/distrito.module';

@Module({
  controllers: [FixerController],
  providers: [FixerService],
  imports: [
    DistritoModule,
    TypeOrmModule.forFeature([Fixer])
  ],
  exports: [ FixerService, TypeOrmModule ]
})
export class FixerModule {}
