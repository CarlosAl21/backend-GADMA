import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateCtramUsuarioDto {
    @IsString()
    @IsNotEmpty()
    cedula: string;

    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    apellido: string;

    @IsNotEmpty()
    @IsDate()
    fecha_nacimiento: Date;
    
    @IsString()
    @IsNotEmpty()
    contrasena: string;

}
