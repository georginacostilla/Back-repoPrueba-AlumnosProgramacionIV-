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
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(150)
  titulo: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(5000)
  contenido: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  autor: string;

  @IsDateString()
  fechaPublicacion: string;

  @IsOptional()
  @IsUrl()
  url?: string;
}
