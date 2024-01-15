import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { ChoombaModule } from '../choomba/choomba.module';
import { CorpoModule } from '../corpo/corpo.module';
import { GangModule } from '../gang/gang.module';
import { FixerModule } from '../fixer/fixer.module';
import { CyberwareModule } from '../cyberware/cyberware.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [GangModule,ChoombaModule,CorpoModule,FixerModule,CyberwareModule]
})
export class SeedModule {}
