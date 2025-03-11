import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateCtramUsuarioDto } from './dto/create-ctram_usuario.dto';
import { UpdateCtramUsuarioDto } from './dto/update-ctram_usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CtramUsuario } from './entities/ctram_usuario.entity';

@Injectable()
export class CtramUsuarioService {
  constructor(@InjectRepository(CtramUsuario) private ctramUsuarioRepository: Repository<CtramUsuario>) {
    console.log('Servicios Cargados');
  }
  async create(createCtramUsuarioDto: CreateCtramUsuarioDto) {
    try {
      const ctramUsuario = this.ctramUsuarioRepository.create(createCtramUsuarioDto);
      return await this.ctramUsuarioRepository.save(ctramUsuario);
    } catch (error) {
      console.log(error);
      return { error: error.message}
    }
  }

  findAll() {
    return this.ctramUsuarioRepository.find();
  }

  async findOne(id: string) {
    try {
      const ctramUsuario = await this.ctramUsuarioRepository.findOne({where: {cedula: id} });
      if (!ctramUsuario) {
        return { error: 'No se encontro el usuario'}
      }
      return ctramUsuario;
    } catch (error) {
      console.log(error);
      return { error: error.message}
    }
  }

  async update(id: string, updateCtramUsuarioDto: UpdateCtramUsuarioDto) {
    try {
      const ctramUsuario = await this.ctramUsuarioRepository.findOne({where: {cedula: id} });
      if (!ctramUsuario) {
        return { error: 'No se encontro el usuario'}
      }
      this.ctramUsuarioRepository.merge(ctramUsuario, updateCtramUsuarioDto);
      return await this.ctramUsuarioRepository.save(ctramUsuario);
    } catch (error) {
      console.log(error);
      return { error: error.message}
    }
  }

  async remove(id: string) {
    try {
      const ctramUsuario = await this.ctramUsuarioRepository.findOne({where: {cedula: id} });
      if (!ctramUsuario) {
        return { error: 'No se encontro el usuario'}
      }
      return await this.ctramUsuarioRepository.remove(ctramUsuario);
    } catch (error) {
      console.log(error);
      return { error: error.message}
    }
  }

  async validateUser(username: string, pass: string): Promise<CtramUsuario | null> {
    const user = await this.ctramUsuarioRepository.findOne({where: {cedula: username} });
    if (user && (await bcrypt.compare(pass, user.password))) {
      return user;
    }
    return null;
  }

}
