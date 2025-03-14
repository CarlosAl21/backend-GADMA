import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CtramDireccionService } from './ctram_direccion.service';
import { CreateCtramDireccionDto } from './dto/create-ctram_direccion.dto';
import { UpdateCtramDireccionDto } from './dto/update-ctram_direccion.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiBearerAuth, ApiParam } from '@nestjs/swagger';

@Controller('ctram-direccion')
@ApiTags('Direcciones')
export class CtramDireccionController {
  constructor(private readonly ctramDireccionService: CtramDireccionService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Crear una nueva dirección' })
  @ApiBearerAuth()
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        nombre: { type: 'string', example: 'Dirección de Finanzas' },
      },
    },
  })
  @ApiResponse({ status: 201, description: 'Dirección creada exitosamente.' })
  @ApiResponse({ status: 403, description: 'No autorizado.' })
  create(@Body() createCtramDireccionDto: CreateCtramDireccionDto) {
    return this.ctramDireccionService.create(createCtramDireccionDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las direcciones' })
  @ApiResponse({ status: 200, description: 'Lista de direcciones obtenida correctamente.' })
  findAll() {
    return this.ctramDireccionService.findAll();
  }

  @Get(':name')
  @ApiOperation({ summary: 'Obtener una dirección por nombre' })
  @ApiParam({ name: 'name', type: 'string', example: 'Dirección de Finanzas', description: 'Nombre de la dirección' })
  @ApiResponse({ status: 200, description: 'Dirección encontrada.' })
  @ApiResponse({ status: 404, description: 'Dirección no encontrada.' })
  findOne(@Param('name') name: string) {
    return this.ctramDireccionService.findOne(name);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Actualizar una dirección por ID' })
  @ApiBearerAuth()
  @ApiParam({ name: 'id', type: 'string', example: '550e8400-e29b-41d4-a716-446655440000', description: 'ID de la dirección' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        nombre: { type: 'string', example: 'Dirección de Recursos Humanos' },
      },
    },
  })
  @ApiResponse({ status: 200, description: 'Dirección actualizada correctamente.' })
  @ApiResponse({ status: 403, description: 'No autorizado.' })
  @ApiResponse({ status: 404, description: 'Dirección no encontrada.' })
  update(@Param('id') id: string, @Body() updateCtramDireccionDto: UpdateCtramDireccionDto) {
    return this.ctramDireccionService.update(id, updateCtramDireccionDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Eliminar una dirección por ID' })
  @ApiBearerAuth()
  @ApiParam({ name: 'id', type: 'string', example: '550e8400-e29b-41d4-a716-446655440000', description: 'ID de la dirección' })
  @ApiResponse({ status: 200, description: 'Dirección eliminada correctamente.' })
  @ApiResponse({ status: 403, description: 'No autorizado.' })
  @ApiResponse({ status: 404, description: 'Dirección no encontrada.' })
  remove(@Param('id') id: string) {
    return this.ctramDireccionService.remove(id);
  }
}
