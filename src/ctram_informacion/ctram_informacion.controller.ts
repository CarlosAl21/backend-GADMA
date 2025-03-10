import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CtramInformacionService } from './ctram_informacion.service';
import { CreateCtramInformacionDto } from './dto/create-ctram_informacion.dto';
import { UpdateCtramInformacionDto } from './dto/update-ctram_informacion.dto';
import { CtramTramite } from 'src/ctram_tramite/entities/ctram_tramite.entity';

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
  findOne(@Param('id_tram_per') id_tram_per: CtramTramite) {
    return this.ctramInformacionService.findOne(id_tram_per);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCtramInformacionDto: UpdateCtramInformacionDto) {
    return this.ctramInformacionService.update(id, updateCtramInformacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ctramInformacionService.remove(id);
  }
}
