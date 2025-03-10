import { IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateCtramTramiteDto } from './create-ctram_tramite.dto';

export class UpdateCtramTramiteDto extends PartialType(CreateCtramTramiteDto) {
    @IsString()
    @IsNotEmpty()
    id_tramite: string;
}
