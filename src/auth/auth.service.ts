import { JwtService } from '@nestjs/jwt';
import { CtramUsuarioService } from './../ctram_usuario/ctram_usuario.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    constructor(
        private CtramUsuarioService: CtramUsuarioService,
        private jwtService: JwtService,
    ) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.CtramUsuarioService.validateUser(username, pass);
        if(user){
            const {password, ...result} = user;
            return result;
        }
        return null;
    }

    async login(user: any){
        const payload = {username: user.nombre, sub: user.cedula, role: user.rol};
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
