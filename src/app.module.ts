import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChoombaModule } from './modules/choomba/choomba.module';
import { CorpoModule } from './modules/corpo/corpo.module';
import { GangModule } from './modules/gang/gang.module';
import { SeedModule } from './modules/seed/seed.module';
import { CyberwareModule } from './modules/cyberware/cyberware.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { JwtStrategy } from './modules/auth/strategies/jwt-strategy/jwt-strategy';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    SeedModule,
    ChoombaModule,
    CorpoModule,
    GangModule,
    CyberwareModule,
    UserModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
