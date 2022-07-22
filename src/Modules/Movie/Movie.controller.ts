import { Controller, Get, Post, Body, Param, Delete, Patch, UseGuards, Res } from '@nestjs/common';
import { CreateMovieDto } from './dto/CreateMovie.dto';
import { UpdateMovieDto } from './dto/UpdateMovie.dto';
import { CreateMovieGuard } from './guards/CreateMovie.guard';
import { MoviesService } from './Movie.service';
import { IMovie } from './types';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Post()
  @UseGuards(CreateMovieGuard)
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.moviesService.update(id, updateMovieDto);
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
