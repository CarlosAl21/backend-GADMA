import { Module } from '@nestjs/common';
import { CtramTramiteService } from './ctram_tramite.service';
import { CtramTramiteController } from './ctram_tramite.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CtramTramite } from './entities/ctram_tramite.entity';
import { CtramRequisito } from 'src/ctram_requisito/entities/ctram_requisito.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CtramTramite, CtramRequisito])],
  controllers: [CtramTramiteController],
  providers: [CtramTramiteService],
  exports: [CtramTramiteService],
})
export class CtramTramiteModule {}
