import { Injectable } from '@nestjs/common';
import { CreateCtramLinkDto } from './dto/create-ctram_link.dto';
import { UpdateCtramLinkDto } from './dto/update-ctram_link.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CtramLink } from './entities/ctram_link.entity';

@Injectable()
export class CtramLinksService {
  constructor(@InjectRepository(CtramLink) private ctramLinkRepository: Repository<CtramLink>) {
    console.log('Servicios Cargados');
  }

  async create(createCtramLinkDto: CreateCtramLinkDto) {
    try {
      const newCtramLink = this.ctramLinkRepository.create(createCtramLinkDto);
      return await this.ctramLinkRepository.save(newCtramLink);
    } catch (error) {
      const message = 'Error en el servicio create de Links';
      console.error(message, error);
    }
  }

  findAll() {
    return this.ctramLinkRepository.find();
  }

  async findOne(name: string) {
    try {
      return await this.ctramLinkRepository.findOne({ where: { nombre_formato: name } });
    } catch (error) {
      const message = 'Error en el servicio findOne de Links';
      console.error(message, error);
    }
  }

  async update(id: number, updateCtramLinkDto: UpdateCtramLinkDto) {
    try {
      const ctramLink = await this.ctramLinkRepository.findOne({ where: { id_link: id } });
      if (!ctramLink) {
        return null;
      }
      this.ctramLinkRepository.merge(ctramLink, updateCtramLinkDto);
      return await this.ctramLinkRepository.save(ctramLink);
    } catch (error) {
      const message = 'Error en el servicio update de Links';
      console.error(message);
    }
  }

  async remove(id: number) {
    try {
      const ctramLink = await this.ctramLinkRepository.findOne({ where: { id_link: id } });
      if (!ctramLink) {
        return null;
      }
      return await this.ctramLinkRepository.remove(ctramLink);
    } catch (error) {
      const message = 'Error en el servicio remove de Links';
      console.error(message);
    }
  }
}
