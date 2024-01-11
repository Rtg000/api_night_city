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
    afiliacion: string;

}
