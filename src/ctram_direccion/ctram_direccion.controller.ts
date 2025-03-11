import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CtramDireccionService } from './ctram_direccion.service';
import { CreateCtramDireccionDto } from './dto/create-ctram_direccion.dto';
import { UpdateCtramDireccionDto } from './dto/update-ctram_direccion.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('ctram-direccion')
export class CtramDireccionController {
  constructor(private readonly ctramDireccionService: CtramDireccionService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
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
  @UseGuards(JwtAuthGuard, RolesGuard)
  update(@Param('id') id: string, @Body() updateCtramDireccionDto: UpdateCtramDireccionDto) {
    return this.ctramDireccionService.update(id, updateCtramDireccionDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  remove(@Param('id') id: string) {
    return this.ctramDireccionService.remove(id);
  }
}
