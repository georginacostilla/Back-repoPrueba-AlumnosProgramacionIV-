import { PartialType, PickType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto.js';

export class UpdateUserDto extends PartialType(
  PickType(CreateUserDto, ['nombre', 'email'] as const),
) {}
