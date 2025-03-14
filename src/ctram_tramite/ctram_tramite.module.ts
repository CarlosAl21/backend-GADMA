import { Module } from '@nestjs/common';
import { CtramTramiteService } from './ctram_tramite.service';
import { CtramTramiteController } from './ctram_tramite.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CtramTramite } from './entities/ctram_tramite.entity';
import { CtramRequisito } from 'src/ctram_requisito/entities/ctram_requisito.entity';
import { CtramDireccion } from 'src/ctram_direccion/entities/ctram_direccion.entity';
import { CtramFormato } from 'src/ctram_formato/entities/ctram_formato.entity';
import { CtramInformacion } from 'src/ctram_informacion/entities/ctram_informacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CtramTramite, CtramRequisito, CtramDireccion, CtramFormato, CtramInformacion])],
  controllers: [CtramTramiteController],
  providers: [CtramTramiteService],
  exports: [CtramTramiteService],
})
export class CtramTramiteModule {}
