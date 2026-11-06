# Programación IV - UTN FRT
# Georgina Costilla
<img alt="NestJS" src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white"/>

Proyecto de práctica para trabajar con **NestJS**, organización por módulos, controladores, servicios, DTO y validación de datos.

## Requisitos

- Node.js
- npm

## Instalación y ejecución

```bash
npm install
npm run start:dev
```

La API queda disponible en `http://localhost:3000`. Para cambiar el puerto, definí la variable de entorno `PORT`.

## Módulos

- `users`: operaciones CRUD de usuarios.
- `libros`: operaciones CRUD de libros.
- `publicaciones`: operaciones CRUD de publicaciones.
- `tesis`: operaciones CRUD de tesis.
- `auth`: rutas para registro e inicio de sesión.

Las rutas de autenticación son:

- `POST /auth/register` — recibe `nombre`, `email` y `password`.
- `POST /auth/login` — recibe `email` y `password`.

> **Nota:** Las rutas de registro e inicio de sesión son una base para la práctica. Aún requieren persistencia de usuarios y manejo seguro de contraseñas para funcionar.

## DTO y validaciones

Los DTO definen los datos esperados por cada operación. La aplicación valida automáticamente los cuerpos de las solicitudes antes de enviarlos a los controladores.

## Comandos útiles

```bash
npm run build  # Compilar
npm run lint   # Revisar el código
npm test       # Ejecutar las pruebas
```
