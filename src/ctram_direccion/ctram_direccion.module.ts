import { Module } from '@nestjs/common';
import { CtramDireccionService } from './ctram_direccion.service';
import { CtramDireccionController } from './ctram_direccion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CtramDireccion } from './entities/ctram_direccion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CtramDireccion])],
  controllers: [CtramDireccionController],
  providers: [CtramDireccionService],
  exports: [CtramDireccionService],
})
export class CtramDireccionModule {}
