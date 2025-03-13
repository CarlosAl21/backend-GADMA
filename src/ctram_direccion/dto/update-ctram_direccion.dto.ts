import { PartialType } from '@nestjs/mapped-types';
import { CreateCtramDireccionDto } from './create-ctram_direccion.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCtramDireccionDto extends PartialType(CreateCtramDireccionDto) {
    @IsString()
    @IsNotEmpty()
    id_dir: string;
}
