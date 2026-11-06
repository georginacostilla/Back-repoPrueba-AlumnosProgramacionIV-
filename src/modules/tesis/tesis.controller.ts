import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TesisService } from './tesis.service.js';
import { CreateTesisDto } from './dto/create-tesis.dto.js';
import { UpdateTesisDto } from './dto/update-tesis.dto.js';

@Controller('tesis')
export class TesisController {
  constructor(private readonly tesisService: TesisService) { }

  @Post()
  create(@Body() createTesisDto: CreateTesisDto) {
    return this.tesisService.create(createTesisDto);
  }

  @Get()
  findAll() {
    return this.tesisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tesisService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTesisDto: UpdateTesisDto) {
    return this.tesisService.update(+id, updateTesisDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tesisService.remove(+id);
  }
}
