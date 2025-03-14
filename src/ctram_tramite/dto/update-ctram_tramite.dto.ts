import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'; // Importar para documentación de Swagger
import { PartialType } from '@nestjs/mapped-types';
import { CreateCtramTramiteDto } from './create-ctram_tramite.dto';

export class UpdateCtramTramiteDto extends PartialType(CreateCtramTramiteDto) {
  
    @ApiProperty({
        description: 'Identificador único del trámite',
        type: String,
        example: 'uuid-del-tramite',
    })
    @IsString()
    @IsNotEmpty()
    id_tramite: string;  // Identificador único del trámite que se va a actualizar
}
