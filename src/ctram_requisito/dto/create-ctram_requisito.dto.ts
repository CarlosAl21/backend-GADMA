import { IsNotEmpty, IsString } from "class-validator";
import { CtramTramite } from "src/ctram_tramite/entities/ctram_tramite.entity";
import { DeepPartial } from "typeorm";
import { ApiProperty } from '@nestjs/swagger'; // Importar para documentación de Swagger

export class CreateCtramRequisitoDto {

    @ApiProperty({
        description: 'Identificador del trámite relacionado',
        type: String,
        example: 'uuid-del-tramite',
    })
    @IsNotEmpty()
    @IsString()
    id_tramite_pert: DeepPartial<CtramTramite>;

    @ApiProperty({
        description: 'Descripción del requisito',
        type: String,
        example: 'Requisito necesario para el trámite',
    })
    @IsString()
    @IsNotEmpty()
    descripcion: string;

    @ApiProperty({
        description: 'Formato del requisito (puede ser tipo de archivo, etc.)',
        type: String,
        example: 'PDF',
    })
    @IsString()
    @IsNotEmpty()
    formato: string;
}
