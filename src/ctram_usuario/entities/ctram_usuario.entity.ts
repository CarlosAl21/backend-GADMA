import { IsDate, IsEmail, IsString } from "class-validator";
import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
import { CtramDireccion } from "src/ctram_direccion/entities/ctram_direccion.entity";
import { join } from "path";

@Entity('CTRAM_USUARIO')
export class CtramUsuario {
    @PrimaryColumn()
    @IsString()
    cedula_ruc: string;

    @Column()
    @IsEmail({}, {message: 'Correo inválido'})
    correo: string;

    @Column()
    @IsString()
    nombre: string;

    @Column()
    @IsString()
    apellido: string;

    @Column()
    @IsDate()
    fecha_nacimiento: Date;

    @Column()
    @IsString()
    password: string;

    @Column()
    @IsString()
    rol: string;

    @ManyToOne(() => CtramDireccion, direccion => direccion.usuarios)
    @JoinColumn({name: 'id_direccion_pert'})
    id_direccion_pert: CtramDireccion;

    @BeforeInsert()
    async hashPassword() {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    @BeforeInsert()
    assignDefaultRole() {
        this.rol = "admin"; // Siempre asigna "usuario" antes de insertar
    }
}
