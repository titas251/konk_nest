import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { Movie } from './models/movie';
import { IMovie } from './types/movies';

@Injectable()
export class MoviesService {
  private moviesStorage = [
    ...Array(
      faker.datatype.number({
        min: 5,
        max: 10,
      }),
    ),
  ].map(() => Movie.create({}));

  public getMovie(title: string) {
    return this.moviesStorage.find((movie) => movie.title === title);
  }

  public getMovies() {
    return this.moviesStorage;
  }

  public createMovie(movie: IMovie) {
    const createdMovie = Movie.create(movie);
    this.moviesStorage.push(createdMovie);

    return createdMovie;
  }

  public deleteMovie(title: string) {
    const deletedMovie = this.getMovie(title);
    if (deletedMovie !== undefined) {
      this.moviesStorage = this.moviesStorage.filter((movie) => movie.title !== deletedMovie.title);
      return deletedMovie;
    }
    return;
  }
}
