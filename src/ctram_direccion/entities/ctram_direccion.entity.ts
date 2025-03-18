import { CtramTramite } from "src/ctram_tramite/entities/ctram_tramite.entity";
import { CtramUsuario } from "src/ctram_usuario/entities/ctram_usuario.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('CTRAM_DIRECCION')
export class CtramDireccion {
    @PrimaryGeneratedColumn('uuid')
    id_dir: string;

    @Column()
    nombre: string;

    @OneToMany(() => CtramUsuario, usuarios => usuarios.id_direccion_pert)
    usuarios: CtramUsuario[];
    
    @OneToMany(() => CtramTramite, tramite => tramite.id_direccion_pert)
    tramites: CtramTramite[];

}
