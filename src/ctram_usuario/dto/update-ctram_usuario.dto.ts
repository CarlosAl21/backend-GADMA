import { PartialType } from '@nestjs/mapped-types';
import { CreateCtramUsuarioDto } from './create-ctram_usuario.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCtramUsuarioDto extends PartialType(CreateCtramUsuarioDto) {
    @IsString()
    @IsNotEmpty()
    cedula_ruc: string;
}
