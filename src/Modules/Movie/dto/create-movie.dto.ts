import { Author } from 'src/Modules/Author/Author.entity';
import { Country } from '../types';

export class CreateMovieDto {
  id: string;
  director: string;
  title: string;
  country: Country;
  duration: number;
  rating: number;
  authors: Author[];
}
