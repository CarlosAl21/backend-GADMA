import { Injectable } from '@nestjs/common';
import { CreateCtramTramiteDto } from './dto/create-ctram_tramite.dto';
import { UpdateCtramTramiteDto } from './dto/update-ctram_tramite.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CtramTramite } from './entities/ctram_tramite.entity';
import { CtramDireccion } from 'src/ctram_direccion/entities/ctram_direccion.entity';
import { CtramRequisito } from 'src/ctram_requisito/entities/ctram_requisito.entity';

@Injectable()
export class CtramTramiteService {
  constructor(
    @InjectRepository(CtramTramite) private ctramTramiteRepository: Repository<CtramTramite>,
    @InjectRepository(CtramRequisito) private ctramRequisitoRepository: Repository<CtramRequisito>,
    @InjectRepository(CtramDireccion) private ctramDireccionRepository: Repository<CtramDireccion>,
) {
    console.log('Servicios Cargados');
  }

  async create(createCtramTramiteDto: CreateCtramTramiteDto | CreateCtramTramiteDto[]) {
    try {
      // Si no es un array, lo convertimos en un array
      const tramitesArray = Array.isArray(createCtramTramiteDto) ? createCtramTramiteDto : [createCtramTramiteDto];
  
      const tramites: CtramTramite[] = [];
      for (const dto of tramitesArray) {
        const ctramDireccion = await this.ctramDireccionRepository.findOne({
          where: { id_dir: dto.id_direccion_pert as unknown as string }
        });
  
        if (!ctramDireccion) {
          return `No se encontró la dirección para el ID: ${dto.id_direccion_pert}`;
        }
  
        dto.id_direccion_pert = ctramDireccion;
        const tramite = this.ctramTramiteRepository.create(dto);
        tramites.push(tramite);
      }
  
      return await this.ctramTramiteRepository.save(tramites);
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  findAll() {
    return this.ctramTramiteRepository.find();
  }

  async findOne(id_tramite: string) {
    const ctramTramite = await this.ctramTramiteRepository.findOne({ where: {id_tramite: id_tramite} });
    if (!ctramTramite) {
      return 'No se encontro el tramite';
    }
    const requisitos = await this.ctramRequisitoRepository.find({where: {id_tramite_pert: ctramTramite}});

    return {ctramTramite, requisitos};
  }

  async update(id: string, updateCtramTramiteDto: UpdateCtramTramiteDto) {
    try {
      const ctramTramite = await this.ctramTramiteRepository.findOne({where: {id_tramite: id}});
      if (!ctramTramite) {
        return 'No se encontro el tramite';
      }
      this.ctramTramiteRepository.merge(ctramTramite, updateCtramTramiteDto);
      return await this.ctramTramiteRepository.save(ctramTramite);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async remove(id: string) {
    try {
      const ctramTramite = await this.ctramTramiteRepository.findOne({where: {id_tramite: id}});
      if (!ctramTramite) {
        return 'No se encontro el tramite';
      }
      return await this.ctramTramiteRepository.remove(ctramTramite);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async findTramiteByName(nombre: string) {
    const ctramTramite = await this.ctramTramiteRepository.find({where: {nombre_tramite: Like(`%${nombre}%`)}});
    if (!ctramTramite) {
      return 'No se encontro el tramite';
    }
    return ctramTramite;
  }

  async findTramiteByDireccion(id_dir: string) {
    const ctramDireccion = await this.ctramDireccionRepository.findOne({where: {id_dir: id_dir}});
    if (!ctramDireccion) {
      return 'No se encontro la direccion';
    }
    const ctramTramite = await this.ctramTramiteRepository.find({where: {id_direccion_pert: ctramDireccion}});
    if (!ctramTramite) {
      return 'No se encontro el tramite';
    }
    return ctramTramite;
  }
}
