import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CtramUsuarioService } from './ctram_usuario.service';
import { CreateCtramUsuarioDto } from './dto/create-ctram_usuario.dto';
import { UpdateCtramUsuarioDto } from './dto/update-ctram_usuario.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('ctram-usuario')
export class CtramUsuarioController {
  constructor(private readonly ctramUsuarioService: CtramUsuarioService) {}

  @Post()
  create(@Body() createCtramUsuarioDto: CreateCtramUsuarioDto) {
    return this.ctramUsuarioService.create(createCtramUsuarioDto);
  }

  @Get()
  findAll() {
    return this.ctramUsuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ctramUsuarioService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  update(@Param('id') id: string, @Body() updateCtramUsuarioDto: UpdateCtramUsuarioDto) {
    return this.ctramUsuarioService.update(id, updateCtramUsuarioDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  remove(@Param('id') id: string) {
    return this.ctramUsuarioService.remove(id);
  }
}
