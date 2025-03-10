import { IsNotEmpty, IsString } from "class-validator";
import { CtramFormato } from "src/ctram_formato/entities/ctram_formato.entity";
import { CtramTramite } from "src/ctram_tramite/entities/ctram_tramite.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";

@Entity('CTRAM_REQUISITO')
export class CtramRequisito {
    @PrimaryColumn()
    @IsString()
    @IsNotEmpty()
    id_requisito: string;

    @ManyToOne(() => CtramTramite, tramite => tramite.requisitos)
    @JoinColumn({ name: 'id_tramite_pert' })
    id_tramite_pert: CtramTramite;

    @Column()
    @IsString()
    @IsNotEmpty()
    descripcion: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    formato: string;

    @OneToMany(() => CtramRequisito, requisito => requisito.id_requisito_pert)
    requisitos: CtramRequisito[];

    @ManyToOne(() => CtramRequisito, requisito => requisito.requisitos)
    @JoinColumn({ name: 'id_requisito_pert' })
    id_requisito_pert: CtramRequisito;

    @OneToMany(() => CtramFormato, formato => formato.id_requisito_pert)
    formatos: CtramFormato[];
}
