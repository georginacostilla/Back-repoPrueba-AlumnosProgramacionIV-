import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreatePublicacioneDto } from './dto/create-publicacione.dto.js';
import { UpdatePublicacioneDto } from './dto/update-publicacione.dto.js';

@Injectable()
export class PublicacionesService {
  constructor(private readonly prisma: PrismaService) { }

  async create(dto: CreatePublicacioneDto) {
    return this.prisma.publicacion.create({
      data: {
        titulo: dto.titulo,
        contenido: dto.contenido,
        autor: dto.autor,
        fechaPublicacion: new Date(dto.fechaPublicacion),
        url: dto.url,
      },
    });
  }

  findAll() {
    return this.prisma.publicacion.findMany();
  }

  async findOne(id: number) {
    const publicacion = await this.prisma.publicacion.findUnique({
      where: { id },
    });

    if (!publicacion) {
      throw new NotFoundException(`No existe una publicación con id ${id}.`);
    }

    return publicacion;
  }

  async update(id: number, dto: UpdatePublicacioneDto) {
    await this.findOne(id);

    return this.prisma.publicacion.update({
      where: { id },
      data: {
        titulo: dto.titulo,
        contenido: dto.contenido,
        autor: dto.autor,
        fechaPublicacion: dto.fechaPublicacion
          ? new Date(dto.fechaPublicacion)
          : undefined,
        url: dto.url,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.publicacion.delete({ where: { id } });
  }
}
