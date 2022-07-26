import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  UseGuards,
  Inject,
  CACHE_MANAGER,
  UseInterceptors,
  CacheInterceptor,
  CacheTTL,
  CacheKey,
} from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CreateMovieDto } from './dto/CreateMovie.dto';
import { UpdateMovieDto } from './dto/UpdateMovie.dto';
import { CreateMovieGuard } from './guards/CreateMovie.guard';
import { MoviesService } from './Movie.service';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService, @Inject(CACHE_MANAGER) private cacheManager: Cache) {}

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
  @UseInterceptors(CacheInterceptor)
  @CacheTTL(20)
  findAll() {
    return this.moviesService.findAll();
  }

  @Get(':id')
  async find(@Param() params) {
    const cachedMovie = await this.cacheManager.get('cached_movie');
    if (!cachedMovie) {
      const movie = await this.moviesService.findOne(params.id);
      await this.cacheManager.set('cached_movie', movie, { ttl: 20 });

      return {
        movie,
        cached: false,
      };
    }

    return {
      movie: cachedMovie,
      cached: true,
    };
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.moviesService.remove(params.id);
  }
}
