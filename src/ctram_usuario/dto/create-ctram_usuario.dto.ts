import { IsDate, IsEmail, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger"; // Importar para documentación de Swagger

export class CreateCtramUsuarioDto {
  
    @ApiProperty({
        description: 'Cédula o RUC del usuario',
        type: String,
        example: '1234567890',
    })
    @IsString()
    @IsNotEmpty()
    cedula_ruc: string;

    @ApiProperty({
        description: 'Correo electrónico del usuario',
        type: String,
        example: 'usuario@ejemplo.com',
    })
    @IsEmail({}, { message: 'Correo inválido' })
    @IsNotEmpty()
    correo: string;

    @ApiProperty({
        description: 'Nombre del usuario',
        type: String,
        example: 'Juan',
    })
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @ApiProperty({
        description: 'Apellido del usuario',
        type: String,
        example: 'Pérez',
    })
    @IsString()
    @IsNotEmpty()
    apellido: string;

    @ApiProperty({
        description: 'Fecha de nacimiento del usuario',
        type: Date,
        example: '1990-05-15',
    })
    @IsNotEmpty()
    @IsDate()
    fecha_nacimiento: Date;

    @ApiProperty({
        description: 'Contraseña del usuario',
        type: String,
        example: 'contraseñaSegura123',
    })
    @IsString()
    @IsNotEmpty()
    password: string;
}
