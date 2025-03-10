import { PartialType } from '@nestjs/mapped-types';
import { CreateCtramInformacionDto } from './create-ctram_informacion.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCtramInformacionDto extends PartialType(CreateCtramInformacionDto) {
    @IsString()
    @IsNotEmpty()
    id_informacion: string;
}
