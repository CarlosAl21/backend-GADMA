import { PartialType } from '@nestjs/mapped-types';
import { CreateCtramDireccionDto } from './create-ctram_direccion.dto';
import { IsNumber } from 'class-validator';

export class UpdateCtramDireccionDto extends PartialType(CreateCtramDireccionDto) {
    @IsNumber()
    id_dir: number;
}
