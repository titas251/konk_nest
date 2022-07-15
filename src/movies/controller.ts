import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie';
import { MoviesService } from './service';
import { IMovie } from './types/movies';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Post()
  async create(@Body() createMovieDto: CreateMovieDto): Promise<IMovie> {
    return this.moviesService.createMovie(createMovieDto);
  }

  @Get()
  async findAll(): Promise<IMovie[]> {
    return this.moviesService.getMovies();
  }

  @Get(':id')
  async find(@Param() params): Promise<IMovie> {
    return this.moviesService.getMovie(params.id);
  }

  @Delete(':id')
  async delete(@Param() params): Promise<IMovie> {
    return this.moviesService.deleteMovie(params.id);
  }
}
