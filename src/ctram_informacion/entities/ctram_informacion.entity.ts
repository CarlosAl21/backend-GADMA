import { IsArray, IsNotEmpty } from "class-validator";
import { CtramTramite } from "src/ctram_tramite/entities/ctram_tramite.entity";
import { Column, Entity, JoinColumn, ManyToMany, PrimaryColumn } from "typeorm";

@Entity('CTRAM_INFORMACION')
export class CtramInformacion {
    @PrimaryColumn()
    @IsArray()
    @IsNotEmpty()
    id_informacion: string;

    @ManyToMany(() => CtramTramite, tramite => tramite.informacion)
    @JoinColumn({name: 'id_tramite'})
    id_tramite_pert: CtramTramite[];

    @Column()
    @IsArray()
    @IsNotEmpty()
    descripcion: string;

    @Column()
    @IsArray()
    @IsNotEmpty()
    tipo: string;

    @Column()
    @IsArray()
    @IsNotEmpty()
    razon: string;

    

}
