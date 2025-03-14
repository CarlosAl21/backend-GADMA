import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CtramInformacionService } from './ctram_informacion.service';
import { CreateCtramInformacionDto } from './dto/create-ctram_informacion.dto';
import { UpdateCtramInformacionDto } from './dto/update-ctram_informacion.dto';
import { RolesGuard } from 'src/auth/roles.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiTags, ApiOperation, ApiParam, ApiBody, ApiResponse } from '@nestjs/swagger';

@ApiTags('Información de Trámites')
@Controller('ctram-informacion')
export class CtramInformacionController {
  constructor(private readonly ctramInformacionService: CtramInformacionService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Crear información de un trámite', description: 'Crea una o varias entradas de información para un trámite.' })
  @ApiBody({ type: CreateCtramInformacionDto, isArray: true })
  @ApiResponse({ status: 201, description: 'Información creada exitosamente.' })
  @ApiResponse({ status: 403, description: 'No autorizado.' })
  create(@Body() createCtramInformacionDto: CreateCtramInformacionDto | CreateCtramInformacionDto[]) {
    return this.ctramInformacionService.create(createCtramInformacionDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener toda la información de trámites', description: 'Devuelve una lista de toda la información registrada sobre trámites.' })
  @ApiResponse({ status: 200, description: 'Lista de información obtenida correctamente.' })
  findAll() {
    return this.ctramInformacionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener información por ID', description: 'Busca una entrada de información específica mediante su ID.' })
  @ApiParam({ name: 'id_info', type: String, description: 'UUID de la información' })
  @ApiResponse({ status: 200, description: 'Información encontrada correctamente.' })
  @ApiResponse({ status: 404, description: 'Información no encontrada.' })
  findOne(@Param('id_info') id_info: string) {
    return this.ctramInformacionService.findOne(id_info);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Actualizar información de un trámite', description: 'Modifica la información asociada a un trámite.' })
  @ApiParam({ name: 'id', type: String, description: 'UUID de la información' })
  @ApiBody({ type: UpdateCtramInformacionDto })
  @ApiResponse({ status: 200, description: 'Información actualizada exitosamente.' })
  @ApiResponse({ status: 403, description: 'No autorizado.' })
  update(@Param('id') id: string, @Body() updateCtramInformacionDto: UpdateCtramInformacionDto) {
    return this.ctramInformacionService.update(id, updateCtramInformacionDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Eliminar información de un trámite', description: 'Elimina una entrada de información por su ID.' })
  @ApiParam({ name: 'id', type: String, description: 'UUID de la información' })
  @ApiResponse({ status: 200, description: 'Información eliminada correctamente.' })
  @ApiResponse({ status: 403, description: 'No autorizado.' })
  remove(@Param('id') id: string) {
    return this.ctramInformacionService.remove(id);
  }

  @Get('/InfoTramite/:id_tramite')
  @ApiOperation({ summary: 'Obtener información por trámite', description: 'Devuelve todas las entradas de información asociadas a un trámite específico.' })
  @ApiParam({ name: 'id_tramite', type: String, description: 'UUID del trámite' })
  @ApiResponse({ status: 200, description: 'Información obtenida correctamente.' })
  findInfoTramite(@Param('id_tramite') id_tramite: string){
    return this.ctramInformacionService.findByTramite(id_tramite);
  }
}
