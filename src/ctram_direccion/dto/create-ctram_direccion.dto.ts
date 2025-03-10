import { IsNotEmpty, IsString } from "class-validator";

export class CreateCtramDireccionDto {
    @IsNotEmpty()
    @IsString()
    nombre: string;
}
