import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CtramFormatoService } from './ctram_formato.service';
import { CreateCtramFormatoDto } from './dto/create-ctram_formato.dto';
import { UpdateCtramFormatoDto } from './dto/update-ctram_formato.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { ApiTags, ApiOperation, ApiParam, ApiBody, ApiResponse } from '@nestjs/swagger';

@ApiTags('Formatos')
@Controller('ctram-formato')
export class CtramFormatoController {
  constructor(private readonly ctramFormatoService: CtramFormatoService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Crear un formato', description: 'Crea un nuevo formato o varios formatos.' })
  @ApiBody({ type: CreateCtramFormatoDto, isArray: true })
  @ApiResponse({ status: 201, description: 'Formato creado exitosamente.' })
  @ApiResponse({ status: 403, description: 'No autorizado.' })
  create(@Body() createCtramFormatoDto: CreateCtramFormatoDto | CreateCtramFormatoDto[]) {
    return this.ctramFormatoService.create(createCtramFormatoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los formatos', description: 'Devuelve una lista de todos los formatos disponibles.' })
  @ApiResponse({ status: 200, description: 'Lista de formatos obtenida correctamente.' })
  findAll() {
    return this.ctramFormatoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un formato por ID', description: 'Busca un formato específico mediante su ID.' })
  @ApiParam({ name: 'id_formato', type: String, description: 'UUID del formato' })
  @ApiResponse({ status: 200, description: 'Formato encontrado correctamente.' })
  @ApiResponse({ status: 404, description: 'Formato no encontrado.' })
  findOne(@Param('id_formato') id_formato: string) {
    return this.ctramFormatoService.findOne(id_formato);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Actualizar un formato', description: 'Actualiza la información de un formato existente.' })
  @ApiParam({ name: 'id', type: String, description: 'UUID del formato' })
  @ApiBody({ type: UpdateCtramFormatoDto })
  @ApiResponse({ status: 200, description: 'Formato actualizado exitosamente.' })
  @ApiResponse({ status: 403, description: 'No autorizado.' })
  update(@Param('id') id: string, @Body() updateCtramFormatoDto: UpdateCtramFormatoDto) {
    return this.ctramFormatoService.update(id, updateCtramFormatoDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Eliminar un formato', description: 'Elimina un formato por su ID.' })
  @ApiParam({ name: 'id', type: String, description: 'UUID del formato' })
  @ApiResponse({ status: 200, description: 'Formato eliminado correctamente.' })
  @ApiResponse({ status: 403, description: 'No autorizado.' })
  remove(@Param('id') id: string) {
    return this.ctramFormatoService.remove(id);
  }

  @Get('/formatoRequisito/:id_requisito')
  @ApiOperation({ summary: 'Obtener formatos por requisito', description: 'Devuelve los formatos asociados a un requisito específico.' })
  @ApiParam({ name: 'id_requisito', type: String, description: 'UUID del requisito' })
  @ApiResponse({ status: 200, description: 'Formatos encontrados correctamente.' })
  findByRequisito(@Param('id_requisito') id_requisito: string) {
    return this.ctramFormatoService.findByRequisito(id_requisito);
  }
}
