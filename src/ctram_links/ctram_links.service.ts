import { Injectable } from '@nestjs/common';
import { CreateCtramLinkDto } from './dto/create-ctram_link.dto';
import { UpdateCtramLinkDto } from './dto/update-ctram_link.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
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

  async findOne(id: string) {
    try {
      return await this.ctramLinkRepository.findOne({ where: { id_link: id } });
    } catch (error) {
      const message = 'Error en el servicio findOne de Links';
      console.error(message, error);
    }
  }

  async update(id: string, updateCtramLinkDto: UpdateCtramLinkDto) {
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

  async remove(id: string) {
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

  async findByName(name: string) {
    try {
      return await this.ctramLinkRepository.find({ where: { nombre_formato: Like(`%${name}%`) } });
    } catch (error) {
      const message = 'Error en el servicio findByName de Links';
      console.error(message);
    }
  }
}
