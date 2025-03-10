import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CtramRequisitoService } from './ctram_requisito.service';
import { CreateCtramRequisitoDto } from './dto/create-ctram_requisito.dto';
import { UpdateCtramRequisitoDto } from './dto/update-ctram_requisito.dto';
import { CtramTramite } from 'src/ctram_tramite/entities/ctram_tramite.entity';

@Controller('ctram-requisito')
export class CtramRequisitoController {
  constructor(private readonly ctramRequisitoService: CtramRequisitoService) {}

  @Post()
  create(@Body() createCtramRequisitoDto: CreateCtramRequisitoDto) {
    return this.ctramRequisitoService.create(createCtramRequisitoDto);
  }

  @Get()
  findAll() {
    return this.ctramRequisitoService.findAll();
  }

  @Get('requisito/:id_requisito')
  findOne(@Param('id_requisito') id_requsito: string) {
    return this.ctramRequisitoService.findOne(id_requsito);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCtramRequisitoDto: UpdateCtramRequisitoDto) {
    return this.ctramRequisitoService.update(id, updateCtramRequisitoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ctramRequisitoService.remove(id);
  }

}
