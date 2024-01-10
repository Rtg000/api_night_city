import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { ChoombaModule } from '../choomba/choomba.module';
import { CorpoModule } from '../corpo/corpo.module';
import { GangModule } from '../gang/gang.module';
import { FixerModule } from '../fixer/fixer.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [ChoombaModule,CorpoModule,GangModule,FixerModule]
})
export class SeedModule {}
