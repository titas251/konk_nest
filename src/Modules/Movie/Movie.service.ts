import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './Movie.entity';
import { CreateMovieDto } from './dto/CreateMovie.dto';
import { Author } from '../Author/Author.entity';
import { UpdateMovieDto } from './dto/UpdateMovie.dto';
import { string } from 'yup/lib/locale';

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

  create(movie: CreateMovieDto) {
    const newMovie = this.moviesRepository.create(movie);
    return this.moviesRepository.save(newMovie);
  }

  update(id: string, movie: UpdateMovieDto) {
    return this.moviesRepository.save({ id, ...movie });
  }

  async remove(id: string) {
    return await this.moviesRepository.delete(id);
  }
}
