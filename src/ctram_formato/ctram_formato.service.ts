import { Injectable } from '@nestjs/common';
import { CreateCtramFormatoDto } from './dto/create-ctram_formato.dto';
import { UpdateCtramFormatoDto } from './dto/update-ctram_formato.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CtramFormato } from './entities/ctram_formato.entity';
import { CtramRequisito } from 'src/ctram_requisito/entities/ctram_requisito.entity';
import { CtramLink } from 'src/ctram_links/entities/ctram_link.entity';

@Injectable()
export class CtramFormatoService {
  constructor(
    @InjectRepository(CtramFormato) private ctramFormatoRepository: Repository<CtramFormato>,
    @InjectRepository(CtramRequisito) private ctramRequisitoRepository: Repository<CtramRequisito>,
    @InjectRepository(CtramLink) private ctramLinkRepository: Repository<CtramLink>,
  ) {
    console.log('Servicios Cargados');
  }

  async create(createCtramFormatoDto: CreateCtramFormatoDto) {
    try {
      const ctramRequisito = await this.ctramRequisitoRepository.findOne({where: {id_requisito: createCtramFormatoDto.id_requisito_pert as unknown as string}});
      if (!ctramRequisito) {
        return {message: 'No se encontró el requisito'};
      }
      createCtramFormatoDto.id_requisito_pert = ctramRequisito;

      const ctramLink = await this.ctramLinkRepository.findOne({where: {id_link: createCtramFormatoDto.id_link_pert as unknown as string}});
      if (!ctramLink) {
        return {message: 'No se encontró el link'};
      }
      createCtramFormatoDto.id_link_pert = ctramLink;
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
