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
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @MinLength(1)
  titulo: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  autor: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  editorial: string;

  @IsInt()
  @Min(1)
  anioPublicacion: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(17)
  @Matches(/^[0-9Xx-]+$/)
  isbn: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  precio: number;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  descripcion?: string;
}
