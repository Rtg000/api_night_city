import { IsString } from "class-validator";

export class CreateChoombaDto {

    @IsString()
    id: string;

    @IsString()
    nombre: string;

    @IsString()
    edad: string;

    @IsString()
    afiliacion: string;

}
