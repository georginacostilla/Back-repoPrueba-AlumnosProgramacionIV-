import {
  IsBoolean,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateTesisDto {
  @IsString({ message: 'El nombre debe ser un texto.' })
  @IsNotEmpty({ message: 'El nombre es obligatorio.' })
  @MinLength(1, { message: 'El nombre no puede estar vacío.' })
  @MaxLength(150, { message: 'El nombre no puede superar los 150 caracteres.' })
  nombre: string;

  @IsString({ message: 'La descripción debe ser un texto.' })
  @IsNotEmpty({ message: 'La descripción es obligatoria.' })
  @MinLength(1, { message: 'La descripción no puede estar vacía.' })
  @MaxLength(5000, {
    message: 'La descripción no puede superar los 5000 caracteres.',
  })
  descripcion: string;

  @IsBoolean({ message: 'El estado debe ser verdadero o falso.' })
  estado: boolean;

  @IsString({ message: 'El autor debe ser un texto.' })
  @IsNotEmpty({ message: 'El autor es obligatorio.' })
  @MaxLength(100, { message: 'El autor no puede superar los 100 caracteres.' })
  autor: string;
}
