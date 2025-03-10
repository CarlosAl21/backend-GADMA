import { Injectable } from '@nestjs/common';
import { CreateCtramDireccionDto } from './dto/create-ctram_direccion.dto';
import { UpdateCtramDireccionDto } from './dto/update-ctram_direccion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CtramDireccion } from './entities/ctram_direccion.entity';

@Injectable()
export class CtramDireccionService {

  constructor(@InjectRepository (CtramDireccion) private readonly ctramDireccionRepository: Repository<CtramDireccion>){
    console.log('Servicios Cargados');
  }
  async create(createCtramDireccionDto: CreateCtramDireccionDto) {
    try {
      const nuevo = this.ctramDireccionRepository.create(createCtramDireccionDto);
      return await this.ctramDireccionRepository.save(nuevo);
    } catch (error) {
      console.log(error);
      return {error: error, mensaje: 'Error en la creacion'};
    }
  }

  findAll() {
    const datos = this.ctramDireccionRepository.find();
    return datos;
  }

  async findOne(name: string) {
    const datos = await this.ctramDireccionRepository.findOne({where: {nombre: name}});
    if (datos) {
      return datos;
    }
    return {error: 'Error', mensaje: 'No se encontro el registro'};
  }

  async update(id: string, updateCtramDireccionDto: UpdateCtramDireccionDto) {
    try {
      const datos = await this.ctramDireccionRepository.findOne({where: {id_dir: id}});
      if (datos) {
        this.ctramDireccionRepository.merge(datos, updateCtramDireccionDto);
        return await this.ctramDireccionRepository.save(datos);
      }
      return {error: 'Error', mensaje: 'No se encontro el registro'};
    } catch (error) {
      console.log(error);
      return {error: error, mensaje: 'Error en la actualizacion'};
    }
  }

  async remove(id: string) {
    try {
      const datos = await this.ctramDireccionRepository.findOne({where: {id_dir: id}});
      if (datos) {
        return await this.ctramDireccionRepository.remove(datos);
      }
      return {error: 'Error', mensaje: 'No se encontro el registro'};
    } catch (error) {
      console.log(error);
      return {error: error, mensaje: 'Error en la eliminacion'};
    }
  }
}
