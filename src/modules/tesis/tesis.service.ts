import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateTesisDto } from './dto/create-tesis.dto.js';
import { UpdateTesisDto } from './dto/update-tesis.dto.js';

@Injectable()
export class TesisService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateTesisDto) {
    return this.prisma.tesis.create({ data: dto });
  }

  findAll() {
    return this.prisma.tesis.findMany();
  }

  async findOne(id: number) {
    const tesis = await this.prisma.tesis.findUnique({ where: { id } });

    if (!tesis) {
      throw new NotFoundException(`No existe una tesis con id ${id}.`);
    }

    return tesis;
  }

  async update(id: number, dto: UpdateTesisDto) {
    await this.findOne(id);

    return this.prisma.tesis.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.tesis.delete({ where: { id } });
  }
}
