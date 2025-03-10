import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CtramInformacionService } from './ctram_informacion.service';
import { CreateCtramInformacionDto } from './dto/create-ctram_informacion.dto';
import { UpdateCtramInformacionDto } from './dto/update-ctram_informacion.dto';

@Controller('ctram-informacion')
export class CtramInformacionController {
  constructor(private readonly ctramInformacionService: CtramInformacionService) {}

  @Post()
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
  update(@Param('id') id: string, @Body() updateCtramInformacionDto: UpdateCtramInformacionDto) {
    return this.ctramInformacionService.update(id, updateCtramInformacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ctramInformacionService.remove(id);
  }

  @Get('/InfoTramite/:id_tramite')
  findInfoTramite(@Param('id_tramite') id_tramite: string){
    return this.ctramInformacionService.findByTramite(id_tramite);
  }
}
