import { IsString } from "class-validator";

export class CreateCorpoDto {

    @IsString()
    id: string;

    @IsString()
    nombre: string;

}
