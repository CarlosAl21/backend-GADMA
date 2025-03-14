import { PartialType } from '@nestjs/mapped-types';
import { CreateCtramInformacionDto } from './create-ctram_informacion.dto';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'; // Para la documentación de Swagger

export class UpdateCtramInformacionDto extends PartialType(CreateCtramInformacionDto) {
    @ApiProperty({
        description: 'Identificador único de la información',
        type: String,
        example: 'uuid-de-la-informacion',
    })
    @IsString()
    @IsNotEmpty()
    id_informacion: string;
}
