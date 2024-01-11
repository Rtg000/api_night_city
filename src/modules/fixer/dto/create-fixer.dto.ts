import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateFixerDto {

    @IsString()
    id: string;

    @IsString()
    nombre: string;

    @IsNumber()
    @IsOptional()
    edad: number;

    @IsString()
    distrito: string;

}
