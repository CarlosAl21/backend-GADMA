import { PartialType } from '@nestjs/mapped-types';
import { CreateCtramLinkDto } from './create-ctram_link.dto';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateCtramLinkDto extends PartialType(CreateCtramLinkDto) {
    @IsNumber()
    @IsNotEmpty()
    id_link: number;
}
