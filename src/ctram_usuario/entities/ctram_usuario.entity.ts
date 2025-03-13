import { IsDate, IsEmail, IsString } from "class-validator";
import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";
import * as bcrypt from 'bcrypt';

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

    @BeforeInsert()
    async hashPassword() {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    @BeforeInsert()
    assignDefaultRole() {
        this.rol = "usuario"; // Siempre asigna "usuario" antes de insertar
    }
}
