import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CtramFormatoService } from './ctram_formato.service';
import { CreateCtramFormatoDto } from './dto/create-ctram_formato.dto';
import { UpdateCtramFormatoDto } from './dto/update-ctram_formato.dto';
import { CtramRequisito } from 'src/ctram_requisito/entities/ctram_requisito.entity';

@Controller('ctram-formato')
export class CtramFormatoController {
  constructor(private readonly ctramFormatoService: CtramFormatoService) {}

  @Post()
  create(@Body() createCtramFormatoDto: CreateCtramFormatoDto) {
    return this.ctramFormatoService.create(createCtramFormatoDto);
  }

  @Get()
  findAll() {
    return this.ctramFormatoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id_req_per') id_req_per: CtramRequisito) {
    return this.ctramFormatoService.findOne(id_req_per);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCtramFormatoDto: UpdateCtramFormatoDto) {
    return this.ctramFormatoService.update(id, updateCtramFormatoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ctramFormatoService.remove(id);
  }
}
