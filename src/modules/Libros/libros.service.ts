import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateLibroDto } from './dto/create-libro.dto.js';
import { UpdateLibroDto } from './dto/update-libro.dto.js';

@Injectable()
export class LibrosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createLibroDto: CreateLibroDto) {
    await this.validateIsbn(createLibroDto.isbn);

    return this.prisma.libro.create({ data: createLibroDto });
  }

  findAll() {
    return this.prisma.libro.findMany();
  }

  async findOne(id: number) {
    const libro = await this.prisma.libro.findUnique({ where: { id } });

    if (!libro) {
      throw new NotFoundException(`No existe un libro con id ${id}.`);
    }

    return libro;
  }

  async update(id: number, updateLibroDto: UpdateLibroDto) {
    await this.findOne(id);

    if (updateLibroDto.isbn) {
      await this.validateIsbn(updateLibroDto.isbn, id);
    }

    return this.prisma.libro.update({
      where: { id },
      data: updateLibroDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.libro.delete({ where: { id } });
  }

  private async validateIsbn(isbn: string, libroId?: number) {
    const existingBook = await this.prisma.libro.findUnique({
      where: { isbn },
      select: { id: true },
    });

    if (existingBook && existingBook.id !== libroId) {
      throw new ConflictException('Ya existe un libro con ese ISBN.');
    }
  }
}
