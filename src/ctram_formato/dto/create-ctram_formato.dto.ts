import { IsDate, IsNotEmpty, IsString } from "class-validator";
import { CtramLink } from "src/ctram_links/entities/ctram_link.entity";
import { CtramRequisito } from "src/ctram_requisito/entities/ctram_requisito.entity";
import { ApiProperty } from '@nestjs/swagger';

export class CreateCtramFormatoDto {
    @ApiProperty({
        description: 'Requisito relacionado con el formato',
        type: CtramRequisito,
    })
    @IsString()
    @IsNotEmpty()
    id_requisito_pert: CtramRequisito;

    @ApiProperty({
        description: 'Link relacionado con el formato',
        type: CtramLink,
    })
    @IsString()
    @IsNotEmpty()
    id_link_pert: CtramLink;

    @ApiProperty({
        description: 'Estado del formato',
        type: String,
        example: 'Activo',
    })
    @IsString()
    @IsNotEmpty()
    estado: string;

    @ApiProperty({
        description: 'Fecha de creación del formato',
        type: Date,
    })
    @IsDate()
    @IsNotEmpty()
    fecha_creacion: Date;

    @ApiProperty({
        description: 'Fecha de caducidad del formato',
        type: Date,
    })
    @IsDate()
    @IsNotEmpty()
    fecha_caducidad: Date;

    @ApiProperty({
        description: 'Justificación asociada al formato',
        type: String,
    })
    @IsString()
    @IsNotEmpty()
    justificacion: string;
}
