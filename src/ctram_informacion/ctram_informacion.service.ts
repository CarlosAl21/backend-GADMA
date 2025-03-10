import { Injectable } from '@nestjs/common';
import { CreateCtramInformacionDto } from './dto/create-ctram_informacion.dto';
import { UpdateCtramInformacionDto } from './dto/update-ctram_informacion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CtramInformacion } from './entities/ctram_informacion.entity';
import { CtramTramite } from 'src/ctram_tramite/entities/ctram_tramite.entity';

@Injectable()
export class CtramInformacionService {
  constructor(
    @InjectRepository(CtramInformacion) private ctramInformacionRepository: Repository<CtramInformacion>,
    @InjectRepository(CtramTramite) private ctramTramiteRepository: Repository<CtramTramite>
  ){
    console.log('Servicios Cargados');
  }

  async create(createCtramInformacionDto: CreateCtramInformacionDto) {
    try {
      const nuevo = this.ctramInformacionRepository.create(createCtramInformacionDto);
      return await this.ctramInformacionRepository.save(nuevo);
    } catch (error) {
      console.error(error);
      return error; 
    }
  }

  findAll() {
    return this.ctramInformacionRepository.find();
  }

  async findOne(id_informacion: string) {
    try {
      const info = await this.ctramInformacionRepository.find({where: {id_informacion: id_informacion}});
      if(!info){
        return 'No se encontraron resultados';
      }
      return info;
    } catch (error) {
      console.error(error);
      return error; 
    }
  }

  async update(id: string, updateCtramInformacionDto: UpdateCtramInformacionDto) {
    try {
      const info = await this.ctramInformacionRepository.findOne({where: {id_informacion: id}});
      if(!info){
        return 'No se encontraron resultados';
      }
      this.ctramInformacionRepository.merge(info, updateCtramInformacionDto);
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async remove(id: string) {
    try {
      const info = await this.ctramInformacionRepository.findOne({where: {id_informacion: id}});
      if(!info){
        return 'No se encontraron resultados';
      }
      return await this.ctramInformacionRepository.remove(info);
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async findByTramite(id_tramite: string) {
    try {
      const tramite = await this.ctramTramiteRepository.findOne({where: {id_tramite: id_tramite}});
      if(!tramite){
        return 'No se encontraron resultados';
      }
      return await this.ctramInformacionRepository.find({where: {id_tramite_pert: tramite}});
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}
