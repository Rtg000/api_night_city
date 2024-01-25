import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from 'src/modules/user/entities/user.entity';
import { UserRepository } from 'src/modules/user/entities/user.repository';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        private userRepository: UserRepository,
        private readonly configService: ConfigService
    ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // obtiene el token de la request
            ignoreExpiration: false, // rechaza un token pasado de tiempo
            secretOrKey: configService.get('JWT_SECRET')
        })
    }
    async validate(payload: User){
        console.log(payload)
        return{
            id: payload.id,
            name: payload.username,
            email: payload.email
        }
    }
}
