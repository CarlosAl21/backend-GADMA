import { Module } from '@nestjs/common';
import { CtramDireccionService } from './ctram_direccion.service';
import { CtramDireccionController } from './ctram_direccion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CtramDireccion } from './entities/ctram_direccion.entity';
import { AuthModule } from 'src/auth/auth.module';
import { RolesGuard } from 'src/auth/roles.guard';

@Module({
  imports: [TypeOrmModule.forFeature([CtramDireccion]), AuthModule],
  controllers: [CtramDireccionController],
  providers: [CtramDireccionService, RolesGuard],
  exports: [CtramDireccionService],
})
export class CtramDireccionModule {}
