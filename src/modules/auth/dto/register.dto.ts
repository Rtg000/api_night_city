import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class RegisterAuthDto {

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @MaxLength(50)
    password: string;

}
