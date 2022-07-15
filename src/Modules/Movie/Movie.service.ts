import { Injectable } from '@nestjs/common';
import { IMovie } from './types';
import { MoviesRepository } from './Movie.repository';

@Injectable()
export class MoviesService {
  constructor(private moviesRepository: MoviesRepository) {}

  public getMovie(id: string) {
    return this.moviesRepository.getMovie(id);
  }

  public getMovies() {
    return this.moviesRepository.getMovies();
  }

  public createMovie(movie: IMovie) {
    return this.moviesRepository.createMovie(movie);
  }

  public deleteMovie(id: string) {
    return this.moviesRepository.deleteMovie(id);
  }
}
