import { Injectable } from '@nestjs/common';
import { CreateCtramRequisitoDto } from './dto/create-ctram_requisito.dto';
import { UpdateCtramRequisitoDto } from './dto/update-ctram_requisito.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CtramRequisito } from './entities/ctram_requisito.entity';
import { Repository } from 'typeorm';
import { CtramTramite } from 'src/ctram_tramite/entities/ctram_tramite.entity';

@Injectable()
export class CtramRequisitoService {
  constructor(@InjectRepository(CtramRequisito) private ctramRequisitoRepository: Repository<CtramRequisito>) {
    console.log('Servicios Cargados');
  }

  async create(createCtramRequisitoDto: CreateCtramRequisitoDto) {
    try {
      const nuevo = this.ctramRequisitoRepository.create(createCtramRequisitoDto);
      return await this.ctramRequisitoRepository.save(nuevo);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  findAll() {
    return this.ctramRequisitoRepository.find();
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
  
}
