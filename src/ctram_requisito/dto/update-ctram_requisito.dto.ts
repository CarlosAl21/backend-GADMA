import { PartialType } from '@nestjs/mapped-types';
import { CreateCtramRequisitoDto } from './create-ctram_requisito.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCtramRequisitoDto extends PartialType(CreateCtramRequisitoDto) {
    @IsString()    
    @IsNotEmpty()
    id_requisito: string;
}
