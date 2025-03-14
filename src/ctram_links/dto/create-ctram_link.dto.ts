import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger"; // Importar para documentación de Swagger

export class CreateCtramLinkDto {
    @ApiProperty({
        description: 'URL del enlace relacionado',
        type: String,
        example: 'https://www.ejemplo.com',
    })
    @IsString()
    @IsNotEmpty()
    link: string;
    
    @ApiProperty({
        description: 'Nombre del formato asociado al enlace',
        type: String,
        example: 'PDF',
    })
    @IsString()
    @IsNotEmpty()
    nombre_formato: string;
}
