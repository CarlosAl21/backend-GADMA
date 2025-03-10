import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CtramLinksService } from './ctram_links.service';
import { CreateCtramLinkDto } from './dto/create-ctram_link.dto';
import { UpdateCtramLinkDto } from './dto/update-ctram_link.dto';

@Controller('ctram-links')
export class CtramLinksController {
  constructor(private readonly ctramLinksService: CtramLinksService) {}

  @Post()
  create(@Body() createCtramLinkDto: CreateCtramLinkDto) {
    return this.ctramLinksService.create(createCtramLinkDto);
  }

  @Get()
  findAll() {
    return this.ctramLinksService.findAll();
  }

  @Get(':id')
  findOne(@Param('name') name: string) {
    return this.ctramLinksService.findOne(name);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCtramLinkDto: UpdateCtramLinkDto) {
    return this.ctramLinksService.update(id, updateCtramLinkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ctramLinksService.remove(id);
  }
}
