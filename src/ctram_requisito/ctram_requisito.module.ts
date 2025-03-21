import { Module } from '@nestjs/common';
import { CtramRequisitoService } from './ctram_requisito.service';
import { CtramRequisitoController } from './ctram_requisito.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CtramRequisito } from './entities/ctram_requisito.entity';
import { CtramTramite } from 'src/ctram_tramite/entities/ctram_tramite.entity';
import { CtramFormato } from 'src/ctram_formato/entities/ctram_formato.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CtramRequisito, CtramTramite, CtramFormato])],
  controllers: [CtramRequisitoController],
  providers: [CtramRequisitoService],
  exports: [CtramRequisitoService],
})
export class CtramRequisitoModule {}
