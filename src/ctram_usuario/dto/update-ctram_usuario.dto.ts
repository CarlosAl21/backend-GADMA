import { PartialType } from '@nestjs/mapped-types';
import { CreateCtramUsuarioDto } from './create-ctram_usuario.dto';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'; // Importar para documentación de Swagger

export class UpdateCtramUsuarioDto extends PartialType(CreateCtramUsuarioDto) {
  
    @ApiProperty({
        description: 'Cédula o RUC del usuario que se va a actualizar',
        type: String,
        example: '1234567890',
    })
    @IsString()
    @IsNotEmpty()
    cedula_ruc: string;
}
