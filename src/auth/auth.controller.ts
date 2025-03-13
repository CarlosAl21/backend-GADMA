import { Body, Controller, Post, UseGuards, Request,UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CtramUsuarioService } from 'src/ctram_usuario/ctram_usuario.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { RolesGuard } from './roles.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: CtramUsuarioService,
  ) {}

  @Post('register')
  @UseGuards(JwtAuthGuard, RolesGuard)
  async register(@Body() body: { cedula_ruc: string; correo: string;nombre: string; apellido: string; fecha_nacimiento: Date; password: string }) {
    return this.userService.create(body);
  }

  @Post('login')
  async login(@Body() body: { cedula_ruc: string; password: string }) {
    const user = await this.authService.validateUser(body.cedula_ruc, body.password);
    if(!user){
      return { error: 'Usuario o contraseña incorrectos'}
    }
    return this.authService.login(user);
  }

  @Post('profile')
  @UseGuards(JwtAuthGuard)
  getProfile(@Request() req) {
    return req.user;
  }

}
