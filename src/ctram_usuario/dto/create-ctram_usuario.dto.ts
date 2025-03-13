import { IsDate, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateCtramUsuarioDto {
    @IsString()
    @IsNotEmpty()
    cedula_ruc: string;

    @IsEmail({}, {message: 'Correo inválido'})
    @IsNotEmpty()
    correo: string;

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
    password: string;

}
