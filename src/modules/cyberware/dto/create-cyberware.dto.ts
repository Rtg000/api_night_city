import { IsString } from "class-validator";

export class CreateCyberwareDto {

    @IsString()
    id: string;

    @IsString()
    nombre: string;

    @IsString()
    tipo: string;

    @IsString()
    img: string;

}