import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CtramUsuarioService } from 'src/ctram_usuario/ctram_usuario.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: CtramUsuarioService,
  ) {}

  @Post('register')
  async register(@Body() body: { cedula: string; nombre: string; apellido: string; fecha_nacimiento: Date; password: string }) {
    return this.userService.create(body);
  }

  @Post('login')
  async login(@Body() body: { cedula: string; password: string }) {
    const user = await this.authService.validateUser(body.cedula, body.password);
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
