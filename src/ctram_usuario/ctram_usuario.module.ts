import { Module } from '@nestjs/common';
import { CtramUsuarioService } from './ctram_usuario.service';
import { CtramUsuarioController } from './ctram_usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CtramUsuario } from './entities/ctram_usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CtramUsuario])],
  controllers: [CtramUsuarioController],
  providers: [CtramUsuarioService],
  exports: [CtramUsuarioService],
})
export class CtramUsuarioModule {}
