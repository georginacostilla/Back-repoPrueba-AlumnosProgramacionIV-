import { Injectable } from '@nestjs/common';
import { CreateLibroDto } from './dto/create-libro.dto.js';
import { UpdateLibroDto } from './dto/update-libro.dto.js';

@Injectable()
export class LibrosService {
  create(createLibroDto: CreateLibroDto) {
    return 'Creaste un nuevo libro en la DB';
  }

  findAll() {
    return 'Estos son todos los libros en la DB';
  }

  findOne(id: number) {
    return `Este action returns a #${id} libro`;
  }

  update(id: number, updateLibroDto: UpdateLibroDto) {
    return `This action updates a #${id} libro`;
  }

  remove(id: number) {
    return `This action removes a #${id} libro`;
  }
}
