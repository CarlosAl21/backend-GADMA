import { PartialType } from '@nestjs/mapped-types';
import { CreateCtramFormatoDto } from './create-ctram_formato.dto';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCtramFormatoDto extends PartialType(CreateCtramFormatoDto) {
    @ApiProperty({
        description: 'Identificador único del formato a actualizar',
        type: String,
        example: 'uuid-del-formato',
    })
    @IsString()
    @IsNotEmpty()
    id_formato: string;
}
