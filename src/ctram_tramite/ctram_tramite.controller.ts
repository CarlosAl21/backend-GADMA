import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CtramTramiteService } from './ctram_tramite.service';
import { CreateCtramTramiteDto } from './dto/create-ctram_tramite.dto';
import { UpdateCtramTramiteDto } from './dto/update-ctram_tramite.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { ApiTags, ApiOperation, ApiParam, ApiBody, ApiResponse } from '@nestjs/swagger';

@ApiTags('Trámites')
@Controller('ctram-tramite')
export class CtramTramiteController {
  constructor(private readonly ctramTramiteService: CtramTramiteService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Crear un trámite', description: 'Crea un nuevo trámite en el sistema.' })
  @ApiBody({ type: CreateCtramTramiteDto })
  @ApiResponse({ status: 201, description: 'Trámite creado exitosamente.' })
  @ApiResponse({ status: 403, description: 'No autorizado.' })
  create(@Body() createCtramTramiteDto: CreateCtramTramiteDto | CreateCtramTramiteDto[]) {
    return this.ctramTramiteService.create(createCtramTramiteDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los trámites', description: 'Devuelve una lista de todos los trámites disponibles.' })
  @ApiResponse({ status: 200, description: 'Lista de trámites obtenida correctamente.' })
  findAll() {
    return this.ctramTramiteService.findAll();
  }

  @Get(':id_tramite')
  @ApiOperation({ summary: 'Obtener un trámite por ID', description: 'Obtiene un trámite específico mediante su ID.' })
  @ApiParam({ name: 'id_tramite', type: String, description: 'UUID del trámite' })
  @ApiResponse({ status: 200, description: 'Trámite encontrado correctamente.' })
  @ApiResponse({ status: 404, description: 'Trámite no encontrado.' })
  findOne(@Param('id_tramite') id_tramite: string) {
    return this.ctramTramiteService.findOne(id_tramite);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Actualizar un trámite', description: 'Modifica los datos de un trámite existente.' })
  @ApiParam({ name: 'id', type: String, description: 'UUID del trámite' })
  @ApiBody({ type: UpdateCtramTramiteDto })
  @ApiResponse({ status: 200, description: 'Trámite actualizado exitosamente.' })
  @ApiResponse({ status: 403, description: 'No autorizado.' })
  update(@Param('id') id: string, @Body() updateCtramTramiteDto: UpdateCtramTramiteDto) {
    return this.ctramTramiteService.update(id, updateCtramTramiteDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Eliminar un trámite', description: 'Elimina un trámite mediante su ID.' })
  @ApiParam({ name: 'id', type: String, description: 'UUID del trámite' })
  @ApiResponse({ status: 200, description: 'Trámite eliminado correctamente.' })
  @ApiResponse({ status: 403, description: 'No autorizado.' })
  remove(@Param('id') id: string) {
    return this.ctramTramiteService.remove(id);
  }

  @Get('search/:nombre')
  @ApiOperation({ summary: 'Buscar trámite por nombre', description: 'Busca trámites por su nombre.' })
  @ApiParam({ name: 'nombre', type: String, description: 'Nombre del trámite' })
  @ApiResponse({ status: 200, description: 'Trámites encontrados.' })
  @ApiResponse({ status: 404, description: 'No se encontraron trámites.' })
  search(@Param('nombre') nombre: string) {
    return this.ctramTramiteService.findTramiteByName(nombre);
  }

  @Get('Direccion/:id_direccion')
  @ApiOperation({ summary: 'Buscar trámites por dirección', description: 'Obtiene los trámites asociados a una dirección específica.' })
  @ApiParam({ name: 'id_direccion', type: String, description: 'UUID de la dirección' })
  @ApiResponse({ status: 200, description: 'Trámites obtenidos correctamente.' })
  @ApiResponse({ status: 404, description: 'No se encontraron trámites para esta dirección.' })
  findTramiteByDireccion(@Param('id_direccion') id_direccion: string) {
    return this.ctramTramiteService.findTramiteByDireccion(id_direccion);
  }
}
