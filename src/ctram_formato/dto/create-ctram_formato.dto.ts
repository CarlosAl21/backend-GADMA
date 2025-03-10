import { IsDate, IsNotEmpty, IsString } from "class-validator";
import { CtramLink } from "src/ctram_links/entities/ctram_link.entity";
import { CtramRequisito } from "src/ctram_requisito/entities/ctram_requisito.entity";

export class CreateCtramFormatoDto {
    @IsString()
    @IsNotEmpty()
    id_formato: string;

    @IsString()
    @IsNotEmpty()
    id_requisito_pert: CtramRequisito;

    @IsString()
    @IsNotEmpty()
    id_link_pert: CtramLink;

    @IsString()
    @IsNotEmpty()
    estado: string;

    @IsDate()
    @IsNotEmpty()
    fecha_creacion: Date;

    @IsDate()
    @IsNotEmpty()
    fecha_caducidad: Date;

    @IsString()
    @IsNotEmpty()
    justificacion: string;


}
