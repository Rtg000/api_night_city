import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './entities/auth.entity';
import { UserRepository } from '../user/entities/user.repository';
import { UserModule } from '../user/user.module';
import { User } from '../user/entities/user.entity';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserRepository],
  imports: [
    UserModule,
    // TypeOrmModule.forFeature([UserRepository, User])
  ]
  // exports: [ AuthService, UserRepository ]
})
export class AuthModule {}
