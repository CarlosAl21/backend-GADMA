import { Module } from '@nestjs/common';
import { CtramUsuarioService } from './ctram_usuario.service';
import { CtramUsuarioController } from './ctram_usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CtramUsuario } from './entities/ctram_usuario.entity';
import { CtramDireccion } from 'src/ctram_direccion/entities/ctram_direccion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CtramUsuario, CtramDireccion])],
  controllers: [CtramUsuarioController],
  providers: [CtramUsuarioService],
  exports: [CtramUsuarioService],
})
export class CtramUsuarioModule {}
