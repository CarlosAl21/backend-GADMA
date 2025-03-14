import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CtramRequisitoService } from './ctram_requisito.service';
import { CreateCtramRequisitoDto } from './dto/create-ctram_requisito.dto';
import { UpdateCtramRequisitoDto } from './dto/update-ctram_requisito.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { ApiTags, ApiOperation, ApiParam, ApiBody, ApiResponse } from '@nestjs/swagger';

@ApiTags('Requisitos de Trámites')
@Controller('ctram-requisito')
export class CtramRequisitoController {
  constructor(private readonly ctramRequisitoService: CtramRequisitoService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Crear un requisito', description: 'Crea un requisito para un trámite específico.' })
  @ApiBody({ type: CreateCtramRequisitoDto })
  @ApiResponse({ status: 201, description: 'Requisito creado exitosamente.' })
  @ApiResponse({ status: 403, description: 'No autorizado.' })
  create(@Body() createCtramRequisitoDto: CreateCtramRequisitoDto | CreateCtramRequisitoDto[]) {
    return this.ctramRequisitoService.create(createCtramRequisitoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los requisitos', description: 'Devuelve una lista de todos los requisitos registrados.' })
  @ApiResponse({ status: 200, description: 'Lista de requisitos obtenida correctamente.' })
  findAll() {
    return this.ctramRequisitoService.findAll();
  }

  @Get('requisito/:id_requisito')
  @ApiOperation({ summary: 'Obtener un requisito por ID', description: 'Busca un requisito específico mediante su ID.' })
  @ApiParam({ name: 'id_requisito', type: String, description: 'UUID del requisito' })
  @ApiResponse({ status: 200, description: 'Requisito encontrado correctamente.' })
  @ApiResponse({ status: 404, description: 'Requisito no encontrado.' })
  findOne(@Param('id_requisito') id_requisito: string) {
    return this.ctramRequisitoService.findOne(id_requisito);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Actualizar un requisito', description: 'Modifica los datos de un requisito existente.' })
  @ApiParam({ name: 'id', type: String, description: 'UUID del requisito' })
  @ApiBody({ type: UpdateCtramRequisitoDto })
  @ApiResponse({ status: 200, description: 'Requisito actualizado exitosamente.' })
  @ApiResponse({ status: 403, description: 'No autorizado.' })
  update(@Param('id') id: string, @Body() updateCtramRequisitoDto: UpdateCtramRequisitoDto) {
    return this.ctramRequisitoService.update(id, updateCtramRequisitoDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Eliminar un requisito', description: 'Elimina un requisito mediante su ID.' })
  @ApiParam({ name: 'id', type: String, description: 'UUID del requisito' })
  @ApiResponse({ status: 200, description: 'Requisito eliminado correctamente.' })
  @ApiResponse({ status: 403, description: 'No autorizado.' })
  remove(@Param('id') id: string) {
    return this.ctramRequisitoService.remove(id);
  }
}
