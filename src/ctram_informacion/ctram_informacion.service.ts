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

  async create(createCtramInformacionDto: CreateCtramInformacionDto | CreateCtramInformacionDto[]) {
    try {
      // Convertir un solo objeto en array si es necesario
      const informacionArray = Array.isArray(createCtramInformacionDto) ? createCtramInformacionDto : [createCtramInformacionDto];
  
      const informacionGuardada: CtramInformacion[] = [];
      for (const dto of informacionArray) {
        // Buscar el trámite asociado
        const tramite = await this.ctramTramiteRepository.findOne({
          where: { id_tramite: dto.id_tramite_pert as unknown as string }
        });
  
        if (!tramite) {
          return `No se encontraron resultados para el trámite con ID: ${dto.id_tramite_pert}`;
        }
        dto.id_tramite_pert = tramite;
  
        // Crear la información y agregarla a la lista
        const nuevaInformacion = this.ctramInformacionRepository.create(dto);
        informacionGuardada.push(nuevaInformacion);
      }
  
      // Guardar todas las informaciones en la base de datos
      return await this.ctramInformacionRepository.save(informacionGuardada);
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  findAll() {
    return this.ctramInformacionRepository.find({relations: ['id_tramite_pert']});
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
