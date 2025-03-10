import { Module } from '@nestjs/common';
import { CtramLinksService } from './ctram_links.service';
import { CtramLinksController } from './ctram_links.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CtramLink } from './entities/ctram_link.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CtramLink])],
  controllers: [CtramLinksController],
  providers: [CtramLinksService],
  exports: [CtramLinksService],
})
export class CtramLinksModule {}
