import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorModule } from '../Author/Author.module';
import { AuthorService } from '../Author/Author.service';
import { MoviesController } from './Movie.controller';
import { Movie } from './Movie.entity';
import { MoviesService } from './Movie.service';

@Module({
  imports: [TypeOrmModule.forFeature([Movie]), AuthorModule],
  providers: [MoviesService],
  controllers: [MoviesController],
})
export class MovieModule {}
