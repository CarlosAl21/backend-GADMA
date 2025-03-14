import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CtramLinksService } from './ctram_links.service';
import { CreateCtramLinkDto } from './dto/create-ctram_link.dto';
import { UpdateCtramLinkDto } from './dto/update-ctram_link.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { ApiTags, ApiOperation, ApiParam, ApiBody, ApiResponse } from '@nestjs/swagger';

@ApiTags('Links de Formatos')
@Controller('ctram-links')
export class CtramLinksController {
  constructor(private readonly ctramLinksService: CtramLinksService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Crear un nuevo link de formato', description: 'Crea un registro de link asociado a un formato.' })
  @ApiBody({ type: CreateCtramLinkDto })
  @ApiResponse({ status: 201, description: 'Link de formato creado exitosamente.' })
  @ApiResponse({ status: 403, description: 'No autorizado.' })
  create(@Body() createCtramLinkDto: CreateCtramLinkDto) {
    return this.ctramLinksService.create(createCtramLinkDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los links de formatos', description: 'Devuelve una lista de todos los links registrados.' })
  @ApiResponse({ status: 200, description: 'Lista de links obtenida correctamente.' })
  findAll() {
    return this.ctramLinksService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un link por ID', description: 'Busca un link de formato específico mediante su ID.' })
  @ApiParam({ name: 'id', type: String, description: 'UUID del link' })
  @ApiResponse({ status: 200, description: 'Link encontrado correctamente.' })
  @ApiResponse({ status: 404, description: 'Link no encontrado.' })
  findOne(@Param('id') id: string) {
    return this.ctramLinksService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Actualizar un link de formato', description: 'Modifica los datos de un link asociado a un formato.' })
  @ApiParam({ name: 'id', type: String, description: 'UUID del link' })
  @ApiBody({ type: UpdateCtramLinkDto })
  @ApiResponse({ status: 200, description: 'Link actualizado exitosamente.' })
  @ApiResponse({ status: 403, description: 'No autorizado.' })
  update(@Param('id') id: string, @Body() updateCtramLinkDto: UpdateCtramLinkDto) {
    return this.ctramLinksService.update(id, updateCtramLinkDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Eliminar un link de formato', description: 'Elimina un registro de link por su ID.' })
  @ApiParam({ name: 'id', type: String, description: 'UUID del link' })
  @ApiResponse({ status: 200, description: 'Link eliminado correctamente.' })
  @ApiResponse({ status: 403, description: 'No autorizado.' })
  remove(@Param('id') id: string) {
    return this.ctramLinksService.remove(id);
  }

  @Get('/NombreFormato/:name')
  @ApiOperation({ summary: 'Obtener links por nombre de formato', description: 'Busca links de formatos mediante su nombre.' })
  @ApiParam({ name: 'name', type: String, description: 'Nombre del formato' })
  @ApiResponse({ status: 200, description: 'Links encontrados correctamente.' })
  @ApiResponse({ status: 404, description: 'Links no encontrados.' })
  findByName(@Param('name') name: string) {
    return this.ctramLinksService.findByName(name);
  }
}
