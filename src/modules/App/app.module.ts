import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsersModule } from '../users/users.module.js';
import { AuthModule } from '../auth/auth.module.js';
import { LibrosModule } from '../Libros/libros.module.js';
import { TesisModule } from '../tesis/tesis.module.js';
import { PublicacionesModule } from '../Publicaciones/publicaciones.module.js';

@Module({
  imports: [UsersModule,
    AuthModule,
    LibrosModule,
    TesisModule,
    PublicacionesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
