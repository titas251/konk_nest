import { Country, Genre } from '../types';

export class CreateMovieDto {
  id: string;
  director: string;
  genres: Genre[];
  title: string;
  country: Country;
  duration: number;
  rating: number;
}
