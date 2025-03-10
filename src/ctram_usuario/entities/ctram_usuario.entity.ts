import { IsDate, IsString } from "class-validator";
import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity('CTRAM_USUARIO')
export class CtramUsuario {
    @PrimaryColumn()
    @IsString()
    cedula: string;

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
    contrasena: string;

    @Column()
    @IsString()
    rol: string;

    @BeforeInsert()
    async hashPassword() {
        const saltRounds = 10;
        this.contrasena = await bcrypt.hash(this.contrasena, saltRounds);
    }

    @BeforeInsert()
    assignDefaultRole() {
        this.rol = "usuario"; // Siempre asigna "usuario" antes de insertar
    }
}
