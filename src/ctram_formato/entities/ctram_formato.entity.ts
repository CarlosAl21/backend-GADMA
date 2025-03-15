import { IsDate, IsNotEmpty, IsString } from "class-validator";
import { CtramLink } from "src/ctram_links/entities/ctram_link.entity";
import { CtramRequisito } from "src/ctram_requisito/entities/ctram_requisito.entity";
import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('CTRAM_FORMATO')
export class CtramFormato {
    @PrimaryGeneratedColumn('uuid')
    id_formato: string;

    @ManyToOne(() => CtramRequisito, requisito => requisito.formatos, {nullable: false})
    @IsNotEmpty()
    @JoinColumn({ name: 'id_requisito_pert' })
    id_requisito_pert: CtramRequisito;

    @ManyToOne(() => CtramLink, link => link.formatos, {nullable: false})
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

    @BeforeInsert()
    async estadoDefault() {
        this.estado = 'ACTIVO';
    }

}
