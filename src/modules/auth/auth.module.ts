import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './entities/auth.entity';
import { UserRepository } from '../user/entities/user.repository';
import { UserModule } from '../user/user.module';
import { User } from '../user/entities/user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt-strategy/jwt-strategy';

@Module({
  imports: [
    ConfigModule,
    UserModule,
    TypeOrmModule.forFeature([UserRepository, User]),
    PassportModule.register({defaultStrategy: 'jwt'}),
    // JwtModule.register({
    //   secret: process.env.JWT_SECRET,
    //   signOptions:{
    //     expiresIn: '1h',
    //     algorithm: 'HS256'
    //   }
    // })
    JwtModule.registerAsync({
      imports: [ ConfigModule ],
      inject: [ ConfigService ],
      useFactory: ( configService ) => {
        return{
          secret: configService.get('JWT_SECRET'),
          signOptions: {
            expiresIn: '1h',
            algorithm: 'HS256'
          }
        }
      }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, UserRepository, JwtStrategy, ConfigService],
  exports: [ ConfigService ]
})
export class AuthModule {}
