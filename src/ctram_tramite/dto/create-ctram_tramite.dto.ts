import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger'; // Importar para documentación de Swagger
import { CtramDireccion } from "src/ctram_direccion/entities/ctram_direccion.entity";
import { DeepPartial } from "typeorm";

export class CreateCtramTramiteDto {

    @ApiProperty({
        description: 'Identificador único de la dirección relacionada',
        type: String,
        example: 'uuid-de-la-direccion',
    })
    @IsString()
    @IsNotEmpty()
    id_direccion_pert: DeepPartial<CtramDireccion>;  // Usar el identificador de la dirección

    @ApiProperty({
        description: 'Nombre del trámite',
        type: String,
        example: 'Solicitud de Permiso',
    })
    @IsString()
    @IsNotEmpty()
    nombre_tramite: string;

    @ApiProperty({
        description: 'Modalidad del trámite (Ej: presencial, online)',
        type: String,
        example: 'Presencial',
    })
    @IsString()
    @IsNotEmpty()
    modalidad: string;
}
