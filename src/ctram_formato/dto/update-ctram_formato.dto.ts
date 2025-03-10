import { PartialType } from '@nestjs/mapped-types';
import { CreateCtramFormatoDto } from './create-ctram_formato.dto';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateCtramFormatoDto extends PartialType(CreateCtramFormatoDto) {
    @IsString()
    @IsNotEmpty()
    id_formato: string;
}
