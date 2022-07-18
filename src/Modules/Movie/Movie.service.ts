import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './Movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private moviesRepository: Repository<Movie>,
  ) {}

  findAll() {
    return this.moviesRepository.find();
  }

  findOne(id: string) {
    return this.moviesRepository.findOneBy({ id });
  }

  async create(movie: CreateMovieDto) {
    const newMovie = this.moviesRepository.create(movie);
    await this.moviesRepository.save(newMovie);

    return newMovie;
  }

  async remove(id: string) {
    return await this.moviesRepository.delete(id);
  }
}
