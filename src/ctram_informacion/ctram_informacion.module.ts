import { Module } from '@nestjs/common';
import { CtramInformacionService } from './ctram_informacion.service';
import { CtramInformacionController } from './ctram_informacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CtramInformacion } from './entities/ctram_informacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CtramInformacion])],
  controllers: [CtramInformacionController],
  providers: [CtramInformacionService],
  exports: [CtramInformacionService],
})
export class CtramInformacionModule {}
