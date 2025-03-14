import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CtramUsuarioService } from './ctram_usuario.service';
import { CreateCtramUsuarioDto } from './dto/create-ctram_usuario.dto';
import { UpdateCtramUsuarioDto } from './dto/update-ctram_usuario.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { ApiTags, ApiOperation, ApiParam, ApiBody, ApiResponse } from '@nestjs/swagger';

@ApiTags('Usuarios')
@Controller('ctram-usuario')
export class CtramUsuarioController {
  constructor(private readonly ctramUsuarioService: CtramUsuarioService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un usuario', description: 'Crea un nuevo usuario en el sistema.' })
  @ApiBody({ type: CreateCtramUsuarioDto })
  @ApiResponse({ status: 201, description: 'Usuario creado exitosamente.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  create(@Body() createCtramUsuarioDto: CreateCtramUsuarioDto) {
    return this.ctramUsuarioService.create(createCtramUsuarioDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los usuarios', description: 'Devuelve una lista de todos los usuarios registrados.' })
  @ApiResponse({ status: 200, description: 'Lista de usuarios obtenida correctamente.' })
  findAll() {
    return this.ctramUsuarioService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un usuario por ID', description: 'Obtiene un usuario específico mediante su ID.' })
  @ApiParam({ name: 'id', type: String, description: 'Cédula RUC del usuario' })
  @ApiResponse({ status: 200, description: 'Usuario encontrado correctamente.' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
  findOne(@Param('id') id: string) {
    return this.ctramUsuarioService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Actualizar un usuario', description: 'Modifica los datos de un usuario existente.' })
  @ApiParam({ name: 'id', type: String, description: 'Cédula RUC del usuario' })
  @ApiBody({ type: UpdateCtramUsuarioDto })
  @ApiResponse({ status: 200, description: 'Usuario actualizado exitosamente.' })
  @ApiResponse({ status: 403, description: 'No autorizado.' })
  update(@Param('id') id: string, @Body() updateCtramUsuarioDto: UpdateCtramUsuarioDto) {
    return this.ctramUsuarioService.update(id, updateCtramUsuarioDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Eliminar un usuario', description: 'Elimina un usuario mediante su ID.' })
  @ApiParam({ name: 'id', type: String, description: 'Cédula RUC del usuario' })
  @ApiResponse({ status: 200, description: 'Usuario eliminado correctamente.' })
  @ApiResponse({ status: 403, description: 'No autorizado.' })
  remove(@Param('id') id: string) {
    return this.ctramUsuarioService.remove(id);
  }
}
