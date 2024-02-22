import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateChoombaDto {

    @IsString()
    id: string;

    @IsString()
    nombre: string;

    @IsNumber()
    @IsOptional()
    edad: number;

    @IsString()
    img: string;

    @IsString()
    @IsOptional()
    gang?: string;

}
