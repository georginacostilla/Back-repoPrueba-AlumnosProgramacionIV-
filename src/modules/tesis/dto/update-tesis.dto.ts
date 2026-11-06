import { PartialType } from '@nestjs/mapped-types';
import { CreateTesisDto } from './create-tesis.dto.js';

export class UpdateTesisDto extends PartialType(CreateTesisDto) {}
