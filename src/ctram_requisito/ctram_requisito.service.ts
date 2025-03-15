import { Injectable } from '@nestjs/common';
import { CreateCtramRequisitoDto } from './dto/create-ctram_requisito.dto';
import { UpdateCtramRequisitoDto } from './dto/update-ctram_requisito.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CtramRequisito } from './entities/ctram_requisito.entity';
import { Repository } from 'typeorm';
import { CtramTramite } from 'src/ctram_tramite/entities/ctram_tramite.entity';

@Injectable()
export class CtramRequisitoService {
  constructor(
    @InjectRepository(CtramRequisito) private ctramRequisitoRepository: Repository<CtramRequisito>,
    @InjectRepository(CtramTramite) private ctramTramiteRepository: Repository<CtramTramite>
  ) {
    console.log('Servicios Cargados');
  }

  async create(createCtramRequisitoDto: CreateCtramRequisitoDto | CreateCtramRequisitoDto[]) {
    try {
      // Convertir un solo objeto en array si es necesario
      const requisitosArray = Array.isArray(createCtramRequisitoDto) ? createCtramRequisitoDto : [createCtramRequisitoDto];
  
      const requisitos: CtramRequisito[] = [];
      for (const dto of requisitosArray) {
        // Buscar el trámite asociado
        const tramite = await this.ctramTramiteRepository.findOne({
          where: { id_tramite: dto.id_tramite_pert as unknown as string }
        });
  
        if (!tramite) {
          return `No se encontró el trámite para el ID: ${dto.id_tramite_pert}`;
        }
        dto.id_tramite_pert = tramite;
  
        // Crear el objeto y agregarlo a la lista
        const nuevoRequisito = this.ctramRequisitoRepository.create(dto);
        requisitos.push(nuevoRequisito);
      }
  
      // Guardar todos los requisitos en la base de datos
      return await this.ctramRequisitoRepository.save(requisitos);
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  findAll() {
    return this.ctramRequisitoRepository.find({relations: ['id_tramite_pert']});
  }

  async findOne(id_requisito: string) {
    const respuesta = await this.ctramRequisitoRepository.findOne({where: {id_requisito: id_requisito}});
    if(!respuesta) {
      return 'No se encontro el registro';
    }
    return respuesta;
  }

  async update(id: string, updateCtramRequisitoDto: UpdateCtramRequisitoDto) {
    try {
      const respuesta = await this.ctramRequisitoRepository.findOne({where:{id_requisito: id}});
      if(!respuesta) {
        return 'No se encontro el registro';
      }
      this.ctramRequisitoRepository.merge(respuesta, updateCtramRequisitoDto);
      return await this.ctramRequisitoRepository.save(respuesta);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async remove(id: string) {
    try {
      const respuesta = await this.ctramRequisitoRepository.findOne({where:{id_requisito: id}});
      if(!respuesta) {
        return 'No se encontro el registro';
      }
      return await this.ctramRequisitoRepository.remove
    } catch (error) {
      console.log(error);
      return
    }
  }
  
  async findByFormato(){
    
  }
}
