import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { CtramTramite } from "src/ctram_tramite/entities/ctram_tramite.entity";
import { CtramRequisito } from "../entities/ctram_requisito.entity";
import { DeepPartial } from "typeorm";

export class CreateCtramRequisitoDto {

    @IsNotEmpty()
    id_tramite_pert: DeepPartial<CtramTramite>;

    @IsString()
    @IsNotEmpty()
    descripcion: string;

    @IsString()
    @IsNotEmpty()
    formato: string;

    @IsOptional()
    id_requisito_pert?: DeepPartial<CtramRequisito>;


}
