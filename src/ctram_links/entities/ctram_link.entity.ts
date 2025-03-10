import { IsString, IsNotEmpty } from "class-validator";
import { CtramFormato } from "src/ctram_formato/entities/ctram_formato.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('CTRAM_LINK')
export class CtramLink {
    @PrimaryGeneratedColumn('uuid')
    id_link: string;

    @Column({length: 1000})
    @IsString()
    @IsNotEmpty()
    link: string;

    @Column({length: 255})
    @IsString()
    @IsNotEmpty()
    nombre_formato: string;

    @OneToMany(() => CtramFormato, formato => formato.id_link_pert)
    formatos: CtramFormato[];
}
