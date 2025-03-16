import { Body, Controller, Post, UseGuards, Request, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CtramUsuarioService } from 'src/ctram_usuario/ctram_usuario.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { RolesGuard } from './roles.guard';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiBearerAuth } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Autenticacion')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: CtramUsuarioService,
  ) {}

  @Post('register')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Registrar un nuevo usuario' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        cedula_ruc: { type: 'string' },
        correo: { type: 'string' },
        nombre: { type: 'string' },
        apellido: { type: 'string' },
        fecha_nacimiento: { type: 'string', format: 'date' },
        password: { type: 'string' }
      },
      required: ['cedula_ruc', 'correo', 'nombre', 'apellido', 'fecha_nacimiento', 'password']
    }
  })
  @ApiResponse({ status: 201, description: 'Usuario registrado exitosamente.' })
  @ApiResponse({ status: 403, description: 'Acceso denegado.' })
  async register(@Body() body: { cedula_ruc: string; correo: string; nombre: string; apellido: string; fecha_nacimiento: Date; password: string }) {
    return this.userService.create(body);
  }

  @Post('login')
  @ApiOperation({ summary: 'Autenticar usuario' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        cedula_ruc: { type: 'string' },
        password: { type: 'string' }
      },
      required: ['cedula_ruc', 'password']
    }
  })
  @ApiResponse({ status: 200, description: 'Autenticación exitosa.' })
  @ApiResponse({ status: 401, description: 'Credenciales inválidas.' })
  async login(@Body() body: { cedula_ruc: string; password: string }) {
    const user = await this.authService.validateUser(body.cedula_ruc, body.password);
    if (!user) {
      return { error: 'Usuario o contraseña incorrectos' };
    }
    return this.authService.login(user);
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Cerrar sesión del usuario autenticado' })
  @ApiResponse({ status: 200, description: 'Sesión cerrada correctamente.' })
  @ApiResponse({ status: 401, description: 'No autorizado.' })
  async logout(@Request() req) {
    await this.authService.logout(req.user.cedula_ruc, req.headers.authorization.split(' ')[1]);
    return { message: 'Sesión cerrada correctamente' };
  }

  @Post('profile')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Obtener perfil del usuario autenticado' })
  @ApiResponse({ status: 200, description: 'Perfil del usuario retornado correctamente.' })
  @ApiResponse({ status: 401, description: 'No autorizado.' })
  getProfile(@Request() req) {
    return req.user;
  }
}
