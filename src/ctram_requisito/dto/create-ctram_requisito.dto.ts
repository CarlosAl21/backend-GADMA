import { IsNotEmpty, IsString } from "class-validator";
import { CtramTramite } from "src/ctram_tramite/entities/ctram_tramite.entity";
import { DeepPartial } from "typeorm";

export class CreateCtramRequisitoDto {

    @IsNotEmpty()
    @IsString()
    id_tramite_pert: DeepPartial<CtramTramite>;

    @IsString()
    @IsNotEmpty()
    descripcion: string;

    @IsString()
    @IsNotEmpty()
    formato: string;


}
