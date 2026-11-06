import {
  IsBoolean,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateTesisDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(150)
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(5000)
  descripcion: string;

  @IsBoolean()
  estado: boolean;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  autor: string;
}
