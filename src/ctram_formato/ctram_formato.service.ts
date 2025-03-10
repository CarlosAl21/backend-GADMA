import { Injectable } from '@nestjs/common';
import { CreateCtramFormatoDto } from './dto/create-ctram_formato.dto';
import { UpdateCtramFormatoDto } from './dto/update-ctram_formato.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CtramFormato } from './entities/ctram_formato.entity';
import { CtramRequisito } from 'src/ctram_requisito/entities/ctram_requisito.entity';

@Injectable()
export class CtramFormatoService {
  constructor(
    @InjectRepository(CtramFormato) private ctramFormatoRepository: Repository<CtramFormato>,
    @InjectRepository(CtramRequisito) private ctramRequisitoRepository: Repository<CtramRequisito>,
  ) {
    console.log('Servicios Cargados');
  }

  async create(createCtramFormatoDto: CreateCtramFormatoDto) {
    try {
      const ctramFormato = this.ctramFormatoRepository.create(createCtramFormatoDto);
      return await this.ctramFormatoRepository.save(ctramFormato);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  findAll() {
    return this.ctramFormatoRepository.find();
  }

  async findOne(id_formato: string) {
    const ctramFormato = await this.ctramFormatoRepository.findOne({where: {id_formato: id_formato}});
    if (!ctramFormato) {
      return {message: 'No se encontró el formato'};
    }
    return ctramFormato;
  }

  async update(id: string, updateCtramFormatoDto: UpdateCtramFormatoDto) {
    try {
      const ctramFormato = await this.ctramFormatoRepository.findOne({where: {id_formato: id}});
      if (!ctramFormato) {
        return {message: 'No se encontró el formato'};
      }
      this.ctramFormatoRepository.merge(ctramFormato, updateCtramFormatoDto);
      return await this.ctramFormatoRepository.save(ctramFormato);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async remove(id: string) {
    try {
      const ctramFormato = await this.ctramFormatoRepository.findOne({where: {id_formato: id}});
      if (!ctramFormato) {
        return {message: 'No se encontró el formato'};
      }
      return await this.ctramFormatoRepository.remove(ctramFormato);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async findByRequisito(id_requisito: string) {
    const ctramRequisito = await this.ctramRequisitoRepository.findOne({where: {id_requisito: id_requisito}});
    if (!ctramRequisito) {
      return {message: 'No se encontró el requisito'};
    }
    const ctramFormato = await this.ctramFormatoRepository.findOne({where: {id_requisito_pert: ctramRequisito}});
    if (!ctramFormato) {
      return {message: 'No se encontró el formato'};
    }
    return ctramFormato;
  }
}
