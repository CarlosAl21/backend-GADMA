import { IsNotEmpty, IsString } from "class-validator";
import { CtramDireccion } from "src/ctram_direccion/entities/ctram_direccion.entity";
import { CtramInformacion } from "src/ctram_informacion/entities/ctram_informacion.entity";
import { CtramRequisito } from "src/ctram_requisito/entities/ctram_requisito.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('CTRAM_TRAMITE')
export class CtramTramite {
    @PrimaryGeneratedColumn('uuid')
    id_tramite: string;
    
    @ManyToOne(() => CtramDireccion, direccion => direccion.tramites, {nullable: false})
    @IsNotEmpty()
    @JoinColumn({name: 'id_direccion'})
    id_direccion_pert: CtramDireccion;

    @Column()
    @IsString()
    @IsNotEmpty()
    nombre_tramite: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    modalidad: string;

    @OneToMany(() => CtramInformacion, informacion => informacion.id_tramite_pert)
    informacion: CtramInformacion[];
    
    @OneToMany(() => CtramRequisito, requisito => requisito.id_tramite_pert)
    requisitos: CtramRequisito[];
    


}
