import { IsString } from "class-validator";

export class CreateFixerDto {

    @IsString()
    id: string;

    @IsString()
    nombre: string;

}
