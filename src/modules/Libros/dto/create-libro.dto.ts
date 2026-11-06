import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsOptional,
  Min,
  IsInt,
  MaxLength,
  MinLength,
  Matches,
} from 'class-validator';

export class CreateLibroDto {
  @IsString({ message: 'El título debe ser un texto.' })
  @IsNotEmpty({ message: 'El título es obligatorio.' })
  @MaxLength(100, { message: 'El título no puede superar los 100 caracteres.' })
  @MinLength(1, { message: 'El título no puede estar vacío.' })
  titulo: string;

  @IsString({ message: 'El autor debe ser un texto.' })
  @IsNotEmpty({ message: 'El autor es obligatorio.' })
  @MaxLength(100, { message: 'El autor no puede superar los 100 caracteres.' })
  autor: string;

  @IsString({ message: 'La editorial debe ser un texto.' })
  @IsNotEmpty({ message: 'La editorial es obligatoria.' })
  @MaxLength(100, {
    message: 'La editorial no puede superar los 100 caracteres.',
  })
  editorial: string;

  @IsInt({ message: 'El año de publicación debe ser un número entero.' })
  @Min(1, { message: 'El año de publicación debe ser mayor que cero.' })
  anioPublicacion: number;

  @IsString({ message: 'El ISBN debe ser un texto.' })
  @IsNotEmpty({ message: 'El ISBN es obligatorio.' })
  @MinLength(10, { message: 'El ISBN debe tener al menos 10 caracteres.' })
  @MaxLength(17, { message: 'El ISBN no puede superar los 17 caracteres.' })
  @Matches(/^[0-9Xx-]+$/, {
    message: 'El ISBN solo puede contener números, guiones y la letra X.',
  })
  isbn: string;

  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'El precio debe ser un número con hasta 2 decimales.' },
  )
  @Min(0, { message: 'El precio no puede ser negativo.' })
  precio: number;

  @IsOptional()
  @IsString({ message: 'La descripción debe ser un texto.' })
  @MaxLength(2000, {
    message: 'La descripción no puede superar los 2000 caracteres.',
  })
  descripcion?: string;
}
