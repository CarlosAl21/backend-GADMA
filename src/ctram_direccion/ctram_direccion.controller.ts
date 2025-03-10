import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CtramDireccionService } from './ctram_direccion.service';
import { CreateCtramDireccionDto } from './dto/create-ctram_direccion.dto';
import { UpdateCtramDireccionDto } from './dto/update-ctram_direccion.dto';

@Controller('ctram-direccion')
export class CtramDireccionController {
  constructor(private readonly ctramDireccionService: CtramDireccionService) {}

  @Post()
  create(@Body() createCtramDireccionDto: CreateCtramDireccionDto) {
    return this.ctramDireccionService.create(createCtramDireccionDto);
  }

  @Get()
  findAll() {
    return this.ctramDireccionService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.ctramDireccionService.findOne(name);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCtramDireccionDto: UpdateCtramDireccionDto) {
    return this.ctramDireccionService.update(+id, updateCtramDireccionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ctramDireccionService.remove(+id);
  }
}
