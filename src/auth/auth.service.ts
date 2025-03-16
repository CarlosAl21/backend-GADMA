import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CtramUsuarioService } from './../ctram_usuario/ctram_usuario.service';

@Injectable()
export class AuthService {
    private activeSessions = new Map<string, string[]>(); // Almacena tokens activos por usuario

    constructor(
        private userService: CtramUsuarioService,
        private jwtService: JwtService,
    ) {
        // Iniciar la limpieza automática de tokens expirados al iniciar el servicio
        this.startTokenCleanup();
    }

    // Función para iniciar la limpieza automática
    private startTokenCleanup() {
        setInterval(() => {
            console.log('Limpiando tokens expirados...');
            // Recorremos el mapa y limpiamos los tokens expirados
            for (const [cedula_ruc, tokens] of this.activeSessions.entries()) {
                const validTokens = tokens.filter(token => {
                    try {
                        this.jwtService.verify(token); // Verificamos si el token está expirado
                        return true; // Si el token es válido, lo mantenemos
                    } catch (e) {
                        console.log('Token expirado:', token);
                        return false; // Si el token expiró, lo eliminamos
                    }
                });

                if (validTokens.length > 0) {
                    this.activeSessions.set(cedula_ruc, validTokens);
                } else {
                    this.activeSessions.delete(cedula_ruc); // Eliminar la entrada si no hay tokens válidos
                }
            }
        }, 3600000); // Cada 1 hora (3600000 ms)
    }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.validateUser(username, pass);
        
        if (user) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { cedula_ruc: user.cedula_ruc, nombre: user.nombre, rol: user.rol };
        const token = this.jwtService.sign(payload);

        // Guardar sesión en la lista de sesiones activas
        if (!this.activeSessions.has(user.cedula_ruc)) {
            this.activeSessions.set(user.cedula_ruc, []);
        }
        this.activeSessions.get(user.cedula_ruc)?.push(token);

        return { access_token: token };
    }

    async logout(cedula_ruc: string, token: string) {
        const tokens = this.activeSessions.get(cedula_ruc);
        if (tokens) {
            this.activeSessions.set(cedula_ruc, tokens.filter(t => t !== token));
        }
    }

    getActiveSessions() {
        return this.activeSessions;
    }
}
