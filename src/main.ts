import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/App/app.module.js';
import { ValidationPipe } from '@nestjs/common';

// El archivo main.ts en NestJS es fundamental para iniciar la aplicación 
// y lanzar el servidor HTTP.

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();

// De esta manera, NestJS validará los datos recibidos antes de ejecutar 
// el método del controlador.
