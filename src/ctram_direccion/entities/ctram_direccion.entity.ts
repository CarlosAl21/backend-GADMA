import { CtramTramite } from "src/ctram_tramite/entities/ctram_tramite.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('CTRAM_DIRECCION')
export class CtramDireccion {
    @PrimaryGeneratedColumn('uuid')
    id_dir: string;

    @Column()
    nombre: string;
    
    @OneToMany(() => CtramTramite, tramite => tramite.id_direccion_pert)
    tramites: CtramTramite[];

}
