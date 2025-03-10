import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CtramTramiteService } from './ctram_tramite.service';
import { CreateCtramTramiteDto } from './dto/create-ctram_tramite.dto';
import { UpdateCtramTramiteDto } from './dto/update-ctram_tramite.dto';

@Controller('ctram-tramite')
export class CtramTramiteController {
  constructor(private readonly ctramTramiteService: CtramTramiteService) {}

  @Post()
  create(@Body() createCtramTramiteDto: CreateCtramTramiteDto) {
    return this.ctramTramiteService.create(createCtramTramiteDto);
  }

  @Get()
  findAll() {
    return this.ctramTramiteService.findAll();
  }

  @Get(':id_tramite')
  findOne(@Param('id_tramite') id_tramite: string) {
    return this.ctramTramiteService.findOne(id_tramite);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCtramTramiteDto: UpdateCtramTramiteDto) {
    return this.ctramTramiteService.update(id, updateCtramTramiteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ctramTramiteService.remove(id);
  }

  @Get('search/:nombre')
  search(@Param('nombre') nombre: string) {
    return this.ctramTramiteService.findTramiteByName(nombre);
  }
}
