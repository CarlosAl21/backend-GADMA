import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateCtramUsuarioDto } from './dto/create-ctram_usuario.dto';
import { UpdateCtramUsuarioDto } from './dto/update-ctram_usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CtramUsuario } from './entities/ctram_usuario.entity';
import { CtramDireccion } from 'src/ctram_direccion/entities/ctram_direccion.entity';

@Injectable()
export class CtramUsuarioService {
  constructor(
    @InjectRepository(CtramUsuario)
    private ctramUsuarioRepository: Repository<CtramUsuario>,
    @InjectRepository(CtramDireccion)
    private ctramDireccionRepository: Repository<CtramDireccion>,
  ) {
    console.log('Servicios Cargados');
  }

  private validarCedula(cedula: string): boolean {
    if (!/^\d{10}$/.test(cedula)) return false; // Debe tener 10 dígitos
    const provincia = parseInt(cedula.substring(0, 2), 10);
    if (provincia < 1 || provincia > 24) return false; // Provincia válida (01-24)

    const coeficientes = [2, 1, 2, 1, 2, 1, 2, 1, 2];
    let suma = 0;

    for (let i = 0; i < 9; i++) {
      let valor = parseInt(cedula[i]) * coeficientes[i];
      if (valor >= 10) valor -= 9;
      suma += valor;
    }

    const digitoVerificador = (10 - (suma % 10)) % 10;
    return digitoVerificador === parseInt(cedula[9]);
  }

  /**
   * Validar un RUC ecuatoriano
   */
  private validarRuc(ruc: string): boolean {
    if (!/^\d{13}$/.test(ruc)) return false; // Debe tener 13 dígitos
    if (!ruc.endsWith('001')) return false; // Debe terminar en 001
    return this.validarCedula(ruc.substring(0, 10)); // Los primeros 10 dígitos deben ser una cédula válida
  }

  private validarEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async create(CreateCtramUsuarioDto: CreateCtramUsuarioDto) {
    try {
      const { cedula_ruc, correo } = CreateCtramUsuarioDto;

      // Validar que el campo cedula_ruc esté presente
      if (!cedula_ruc) {
        return { error: 'Debe ingresar una cédula o un RUC' };
      }

      // Validar si es cédula o RUC
      const esCedula = this.validarCedula(cedula_ruc);
      const esRuc = this.validarRuc(cedula_ruc);

      if (!esCedula && !esRuc) {
        return {
          error: 'El número ingresado no es una cédula ni un RUC válido',
        };
      }
      if (
        await this.ctramUsuarioRepository.findOne({
          where: { cedula_ruc: CreateCtramUsuarioDto.cedula_ruc },
        })
      ) {
        return { error: 'El usuario ya existe' };
      }

      // Validar que el email tenga formato correcto
      if (!correo || !this.validarEmail(correo)) {
        return { error: 'Debe ingresar un correo electrónico válido' };
      }

      const direccion = await this.ctramDireccionRepository.findOne({where: {id_dir: String(CreateCtramUsuarioDto.id_direccion_pert)}});
      if (!direccion) {
        return { error: 'La dirección de pertenencia no existe' };
      }
      CreateCtramUsuarioDto.id_direccion_pert = direccion;
      // Crear y guardar el usuario si todo es correcto
      const ctramUsuario = this.ctramUsuarioRepository.create(
        CreateCtramUsuarioDto,
      );
      return await this.ctramUsuarioRepository.save(ctramUsuario);
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  }

  findAll() {
    return this.ctramUsuarioRepository.find({relations: ['id_direccion_pert'],});
  }

  async findOne(id: string) {
    try {
      const ctramUsuario = await this.ctramUsuarioRepository.findOne({
        where: { cedula_ruc: id },
        relations: ['id_direccion_pert'],
      });
      if (!ctramUsuario) {
        return { error: 'No se encontro el usuario' };
      }
      return ctramUsuario;
    } catch (error) {
      console.log(error);
      return { error: error.message };
    }
  }

  async update(id: string, updateCtramUsuarioDto: UpdateCtramUsuarioDto) {
    try {
      const ctramUsuario = await this.ctramUsuarioRepository.findOne({
        where: { cedula_ruc: id },
      });
      if (!ctramUsuario) {
        return { error: 'No se encontro el usuario' };
      }
      this.ctramUsuarioRepository.merge(ctramUsuario, updateCtramUsuarioDto);
      return await this.ctramUsuarioRepository.save(ctramUsuario);
    } catch (error) {
      console.log(error);
      return { error: error.message };
    }
  }

  async remove(id: string) {
    try {
      const ctramUsuario = await this.ctramUsuarioRepository.findOne({
        where: { cedula_ruc: id },
      });
      if (!ctramUsuario) {
        return { error: 'No se encontro el usuario' };
      }
      return await this.ctramUsuarioRepository.remove(ctramUsuario);
    } catch (error) {
      console.log(error);
      return { error: error.message };
    }
  }

  async validateUser(
    username: string,
    pass: string,
  ): Promise<CtramUsuario | null> {
    const user = await this.ctramUsuarioRepository.findOne({
      where: { cedula_ruc: username },relations: ['id_direccion_pert'],
    });
    if (user && (await bcrypt.compare(pass, user.password))) {
      return user;
    }
    return null;
  }
}
