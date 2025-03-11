import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CtramInformacionService } from './ctram_informacion.service';
import { CreateCtramInformacionDto } from './dto/create-ctram_informacion.dto';
import { UpdateCtramInformacionDto } from './dto/update-ctram_informacion.dto';
import { RolesGuard } from 'src/auth/roles.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('ctram-informacion')
export class CtramInformacionController {
  constructor(private readonly ctramInformacionService: CtramInformacionService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  create(@Body() createCtramInformacionDto: CreateCtramInformacionDto) {
    return this.ctramInformacionService.create(createCtramInformacionDto);
  }

  @Get()
  findAll() {
    return this.ctramInformacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id_info') id_info: string) {
    return this.ctramInformacionService.findOne(id_info);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  update(@Param('id') id: string, @Body() updateCtramInformacionDto: UpdateCtramInformacionDto) {
    return this.ctramInformacionService.update(id, updateCtramInformacionDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  remove(@Param('id') id: string) {
    return this.ctramInformacionService.remove(id);
  }

  @Get('/InfoTramite/:id_tramite')
  findInfoTramite(@Param('id_tramite') id_tramite: string){
    return this.ctramInformacionService.findByTramite(id_tramite);
  }
}
