import { IsString, IsOptional, IsInt } from 'class-validator';
import { Movie } from 'src/Modules/Movie/Movie.entity';

export class UpdateAuthorDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsInt()
  @IsOptional()
  age: number;

  @IsOptional()
  movie: Movie;
}
