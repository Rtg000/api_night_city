import { IsString } from "class-validator";

export class CreateGangDto {

    @IsString()
    id: string;

    @IsString()
    nombre: string;

    @IsString()
    img: string;

    @IsString()
    descripcion: string;

}
