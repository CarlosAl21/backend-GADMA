import { Module } from '@nestjs/common';
import { CtramFormatoService } from './ctram_formato.service';
import { CtramFormatoController } from './ctram_formato.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CtramFormato } from './entities/ctram_formato.entity';
import { CtramRequisito } from 'src/ctram_requisito/entities/ctram_requisito.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CtramFormato, CtramRequisito])],
  controllers: [CtramFormatoController],
  providers: [CtramFormatoService],
  exports: [CtramFormatoService],
})
export class CtramFormatoModule {}
