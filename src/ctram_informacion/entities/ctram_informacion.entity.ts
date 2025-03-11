import { IsArray, IsNotEmpty } from "class-validator";
import { CtramTramite } from "src/ctram_tramite/entities/ctram_tramite.entity";
import { Column, DeepPartial, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('CTRAM_INFORMACION')
export class CtramInformacion {
    @PrimaryGeneratedColumn('uuid')
    id_informacion: string;

    @ManyToOne(() => CtramTramite, tramite => tramite.informacion)
    @IsNotEmpty()
    @JoinColumn({name: 'id_tramite'})
    id_tramite_pert: CtramTramite;

    @Column({length: 1000})
    @IsArray()
    @IsNotEmpty()
    descripcion: string;

    @Column()
    @IsArray()
    @IsNotEmpty()
    tipo: string;

    @Column({length: 1000})
    @IsArray()
    @IsNotEmpty()
    razon: string;

    

}
