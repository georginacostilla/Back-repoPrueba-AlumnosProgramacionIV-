import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';

@Injectable()
export class UsersService {
  create(_createUserDto: CreateUserDto): never {
    throw new NotImplementedException(
      'La gestión de usuarios se implementará junto con autenticación.',
    );
  }

  findAll(): never {
    throw new NotImplementedException(
      'La gestión de usuarios se implementará junto con autenticación.',
    );
  }

  findOne(_id: number): never {
    throw new NotImplementedException(
      'La gestión de usuarios se implementará junto con autenticación.',
    );
  }

  update(_id: number, _updateUserDto: UpdateUserDto): never {
    throw new NotImplementedException(
      'La gestión de usuarios se implementará junto con autenticación.',
    );
  }

  remove(_id: number): never {
    throw new NotImplementedException(
      'La gestión de usuarios se implementará junto con autenticación.',
    );
  }
}
