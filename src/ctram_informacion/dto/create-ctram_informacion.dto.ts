import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger"; // Importar para documentación de Swagger
import { CtramTramite } from "src/ctram_tramite/entities/ctram_tramite.entity";

export class CreateCtramInformacionDto {
    @ApiProperty({
        description: 'Identificador único del trámite relacionado',
        type: String,
        example: 'uuid-del-tramite',
    })
    @IsString()
    @IsNotEmpty()
    id_tramite_pert: CtramTramite;  // Usar el identificador del trámite

    @ApiProperty({
        description: 'Descripción de la información',
        type: String,
        example: 'Información detallada sobre el trámite',
    })
    @IsString()
    @IsNotEmpty()
    descripcion: string;

    @ApiProperty({
        description: 'Tipo de información (ejemplo: requisitos, procedimiento)',
        type: String,
        example: 'Requisito',
    })
    @IsString()
    @IsNotEmpty()
    tipo: string;

    @ApiProperty({
        description: 'Razón o motivo de la información',
        type: String,
        example: 'Razón del trámite o requisitos necesarios',
    })
    @IsString()
    @IsNotEmpty()
    razon: string;
}
