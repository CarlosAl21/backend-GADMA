import { PartialType } from '@nestjs/mapped-types';
import { CreateCtramDireccionDto } from './create-ctram_direccion.dto';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCtramDireccionDto extends PartialType(CreateCtramDireccionDto) {
  @ApiProperty({
    description: 'ID de la dirección, debe ser único',
    type: String,
    example: 'abcd1234-5678-90ab-cdef12345678', // Puedes colocar un ejemplo real del ID
  })
  @IsString()
  @IsNotEmpty()
  id_dir: string;
}
