import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreatePublicacioneDto {
  @IsString({ message: 'El título debe ser un texto.' })
  @IsNotEmpty({ message: 'El título es obligatorio.' })
  @MinLength(1, { message: 'El título no puede estar vacío.' })
  @MaxLength(150, { message: 'El título no puede superar los 150 caracteres.' })
  titulo: string;

  @IsString({ message: 'El contenido debe ser un texto.' })
  @IsNotEmpty({ message: 'El contenido es obligatorio.' })
  @MinLength(1, { message: 'El contenido no puede estar vacío.' })
  @MaxLength(5000, {
    message: 'El contenido no puede superar los 5000 caracteres.',
  })
  contenido: string;

  @IsString({ message: 'El autor debe ser un texto.' })
  @IsNotEmpty({ message: 'El autor es obligatorio.' })
  @MaxLength(100, { message: 'El autor no puede superar los 100 caracteres.' })
  autor: string;

  @IsDateString({}, { message: 'La fecha de publicación debe ser válida.' })
  fechaPublicacion: string;

  @IsOptional()
  @IsUrl({}, { message: 'La URL debe tener un formato válido.' })
  url?: string;
}
