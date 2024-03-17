import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { RegisterAuthDto } from './dto/register.dto';
import { LoginAuthDto } from './dto/login.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // login
  @Post('login')
  login(@Body() loginAuthDto: LoginAuthDto){
    return this.authService.login(loginAuthDto)
  }

  // register
  @Post('register')
  register(@Body() registerDto: RegisterAuthDto){
    console.log(registerDto)
    return this.authService.register(registerDto);
  }

  // logout

  // checkToken
  
  // profile


}
