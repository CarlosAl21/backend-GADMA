import { IsDate, IsNotEmpty, IsString } from "class-validator";
import { CtramLink } from "src/ctram_links/entities/ctram_link.entity";
import { CtramRequisito } from "src/ctram_requisito/entities/ctram_requisito.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity('CTRAM_FORMATO')
export class CtramFormato {
    @PrimaryColumn()
    @IsString()
    @IsNotEmpty()
    id_formato: string;

    @ManyToOne(() => CtramRequisito, requisito => requisito.formatos)
    @JoinColumn({ name: 'id_formato_pert' })
    id_requisito_pert: CtramRequisito;

    @ManyToOne(() => CtramLink, link => link.formatos)
    @JoinColumn({ name: 'id_link_pert' })
    id_link_pert: CtramLink;

    @Column()
    @IsString()
    @IsNotEmpty()
    estado: string;

    @Column()
    @IsDate()
    fecha_creacion: Date;

    @Column()
    @IsDate()
    fecha_caducidad: Date;

    @Column()
    @IsString()
    justificacion: string;

}
