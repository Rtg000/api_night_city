import { Module } from '@nestjs/common';
import { CyberwareService } from './cyberware.service';
import { CyberwareController } from './cyberware.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cyberware } from './entities/cyberware.entity';

@Module({
  controllers: [CyberwareController],
  providers: [CyberwareService],
  imports: [
    TypeOrmModule.forFeature([Cyberware])  
  ],
  exports: [ CyberwareService, TypeOrmModule ]
})
export class CyberwareModule {}
