import { Country } from '../types';
import { Min, Max, IsEnum, IsString, IsNotEmpty, IsNumber, IsArray, IsOptional, IsInt } from 'class-validator';

export class UpdateMovieDto {
  @IsString()
  @IsOptional()
  director: string;

  @IsString()
  @IsOptional()
  title: string;

  @IsEnum(Country)
  @IsOptional()
  country: Country;

  @Min(30)
  @Max(300)
  @IsOptional()
  duration: number;

  @Min(1)
  @Max(10)
  @IsOptional()
  rating: number;
}
