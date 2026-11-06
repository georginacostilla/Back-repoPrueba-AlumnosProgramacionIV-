import { Injectable, NotImplementedException } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto.js';
import { RegisterAuthDto } from './dto/register-auth.dto.js';

@Injectable()
export class AuthService {
  register(registerAuthDto: RegisterAuthDto): never {
    void registerAuthDto;
    throw new NotImplementedException(
      'Este es el método de registro, pero aan no se ha implementado la lógica de almacenamiento de usuarios en la base de datos.',
    );
  }

  login(loginAuthDto: LoginAuthDto): never {
    void loginAuthDto;
    throw new NotImplementedException(
      'Este es el método de inicio de sesión, pero aún no se ha implementado la lógica de autenticación y generación de tokens.',
    );
  }
}
