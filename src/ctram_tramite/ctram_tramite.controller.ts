import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CtramTramiteService } from './ctram_tramite.service';
import { CreateCtramTramiteDto } from './dto/create-ctram_tramite.dto';
import { UpdateCtramTramiteDto } from './dto/update-ctram_tramite.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('ctram-tramite')
export class CtramTramiteController {
  constructor(private readonly ctramTramiteService: CtramTramiteService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  create(@Body() createCtramTramiteDto: CreateCtramTramiteDto | CreateCtramTramiteDto[]) {
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
  @UseGuards(JwtAuthGuard, RolesGuard)
  update(@Param('id') id: string, @Body() updateCtramTramiteDto: UpdateCtramTramiteDto) {
    return this.ctramTramiteService.update(id, updateCtramTramiteDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  remove(@Param('id') id: string) {
    return this.ctramTramiteService.remove(id);
  }

  @Get('search/:nombre')
  search(@Param('nombre') nombre: string) {
    return this.ctramTramiteService.findTramiteByName(nombre);
  }

  @Get('Direccion/:id_direccion')
  findTramiteByDireccion(@Param('id_direccion') id_direccion: string) {
    return this.ctramTramiteService.findTramiteByDireccion(id_direccion);
  }
}
