import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { Movie } from './models/movie';
import { IMovie } from './types';

@Injectable()
export class MoviesRepository {
  private moviesStorage = [
    ...Array(
      faker.datatype.number({
        min: 5,
        max: 10,
      }),
    ),
  ].map(() => Movie.create({}));

  public getMovie(id: string) {
    return this.moviesStorage.find((movie) => movie.id === id);
  }

  public getMovies() {
    return this.moviesStorage;
  }

  public createMovie(movie: IMovie) {
    const createdMovie = Movie.create(movie);
    this.moviesStorage.push(Movie.create(movie));

    return createdMovie;
  }

  public deleteMovie(id: string): IMovie {
    const deletedMovie = this.getMovie(id);
    if (deletedMovie !== undefined) {
      this.moviesStorage = this.moviesStorage.filter((movie) => movie.id !== deletedMovie.id);
      return deletedMovie;
    }
    return <IMovie>{};
  }
}
