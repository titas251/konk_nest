import { Country, Genre } from '../types/movies';

export class CreateMovieDto {
  director: string;
  genres: Genre[];
  title: string;
  country: Country;
  duration: number;
  rating: number;
}
