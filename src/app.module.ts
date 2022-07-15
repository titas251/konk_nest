import { Module } from '@nestjs/common';
import { MoviesController } from './Modules/Movie/Movie.controller';
import { MoviesRepository } from './Modules/Movie/Movie.repository';
import { MoviesService } from './Modules/Movie/Movie.service';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService, MoviesRepository],
})
export class AppModule {}
