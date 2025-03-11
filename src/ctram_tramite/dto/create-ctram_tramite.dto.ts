import { IsNotEmpty, IsString } from "class-validator";
import { CtramDireccion } from "src/ctram_direccion/entities/ctram_direccion.entity";
import { DeepPartial } from "typeorm";

export class CreateCtramTramiteDto {
    @IsString()
    @IsNotEmpty()
    id_direccion_pert: DeepPartial<CtramDireccion>;
    
    @IsString()
    @IsNotEmpty()
    nombre_tramite: string;
    
    @IsString()
    @IsNotEmpty()
    modalidad: string;
}
