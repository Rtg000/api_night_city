import { IsArray, IsOptional, IsString } from "class-validator";

export class CreateDistritoDto {

    @IsString()
    id: string;

    @IsString()
    nombre: string;

    @IsString({
        each: true
    })
    @IsArray()
    @IsOptional()
    subdistrito: string[];

    @IsString()
    img: string;

}
