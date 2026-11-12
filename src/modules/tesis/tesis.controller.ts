import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { TesisService } from './tesis.service.js';
import { CreateTesisDto } from './dto/create-tesis.dto.js';
import { UpdateTesisDto } from './dto/update-tesis.dto.js';

@Controller('tesis')
export class TesisController {
  constructor(private readonly tesisService: TesisService) {}

  @Post()
  create(@Body() createTesisDto: CreateTesisDto) {
    return this.tesisService.create(createTesisDto);
  }

  @Get()
  findAll() {
    return this.tesisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tesisService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTesisDto: UpdateTesisDto,
  ) {
    return this.tesisService.update(id, updateTesisDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tesisService.remove(id);
  }
}
