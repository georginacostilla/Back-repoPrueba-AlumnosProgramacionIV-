import { Injectable } from '@nestjs/common';
import { CreateTesisDto } from './dto/create-tesis.dto.js';
import { UpdateTesisDto } from './dto/update-tesis.dto.js';

@Injectable()
export class TesisService {
  create(createTesisDto: CreateTesisDto) {
    return 'Te voy a crear una tesis';
  }

  findAll() {
    return `Aqui te traigo todas las tesis`;
  }

  findOne(id: number) {
    return `Aqui te traigo la tesis #${id}`;
  }

  update(id: number, updateTesisDto: UpdateTesisDto) {
    return `This action updates a #${id} tesi`;
  }

  remove(id: number) {
    return `This action removes a #${id} tesi`;
  }
}
