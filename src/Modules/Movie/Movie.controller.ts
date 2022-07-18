import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MoviesService } from './Movie.service';
import { IMovie } from './types';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Post()
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Get()
  findAll() {
    return this.moviesService.findAll();
  }

  @Get(':id')
  find(@Param() params) {
    return this.moviesService.findOne(params.id);
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.moviesService.remove(params.id);
  }
}
