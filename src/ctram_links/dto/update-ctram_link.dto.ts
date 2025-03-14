import { PartialType } from '@nestjs/mapped-types';
import { CreateCtramLinkDto } from './create-ctram_link.dto';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'; // Importar para documentación de Swagger

export class UpdateCtramLinkDto extends PartialType(CreateCtramLinkDto) {
    @ApiProperty({
        description: 'Identificador único del enlace',
        type: String,
        example: 'uuid-del-enlace',
    })
    @IsString()
    @IsNotEmpty()
    id_link: string;
}
