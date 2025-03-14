import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateCtramDireccionDto {
  @ApiProperty({
    description: 'Nombre de la dirección',
    type: String,
    example: 'Dirección de Trámites',
  })
  @IsNotEmpty()
  @IsString()
  nombre: string;
}
