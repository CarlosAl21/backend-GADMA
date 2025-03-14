import { PartialType } from '@nestjs/mapped-types';
import { CreateCtramRequisitoDto } from './create-ctram_requisito.dto';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'; // Importar para documentación de Swagger

export class UpdateCtramRequisitoDto extends PartialType(CreateCtramRequisitoDto) {

    @ApiProperty({
        description: 'Identificador único del requisito',
        type: String,
        example: 'uuid-del-requisito',
    })
    @IsString()
    @IsNotEmpty()
    id_requisito: string;
}
