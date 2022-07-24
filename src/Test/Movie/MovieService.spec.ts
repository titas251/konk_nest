import { Test, TestingModule } from '@nestjs/testing';
import { Movie } from '../../Modules/Movie/Movie.entity';
import { UpdateMovieDto } from '../../Modules/Movie/dto/UpdateMovie.dto';
import { MoviesService } from '../../Modules/Movie/Movie.service';
import { ConnectionOptions } from '../../TypeORM/ConnectionOptions';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from '../../Modules/Movie/types';

describe('MovieService', () => {
  let moviesService: MoviesService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(ConnectionOptions), TypeOrmModule.forFeature([Movie])],
      providers: [MoviesService],
    }).compile();

    moviesService = module.get<MoviesService>(MoviesService);
  });

  describe('findOne', () => {
    it('should call method with expected params', async () => {
      const findOneSpy = jest.spyOn(moviesService, 'findOne');
      const movieId = 'movieId';
      await moviesService.findOne(movieId);
      expect(findOneSpy).toHaveBeenCalledWith(movieId);
    });
  });

  describe('update', () => {
    it('movie to update object should match method return object', async () => {
      const id = 'movieId';
      const movieDTO = {
        director: 'director',
        title: 'title',
        duration: 100,
        country: Country.US,
        rating: 7,
      };

      const result = await moviesService.update(id, movieDTO);
      expect({ id, ...movieDTO }).toMatchObject(result);
    });

    it('should call method with expected params', async () => {
      const updateSpy = jest.spyOn(moviesService, 'update');
      const id = 'movieId';
      const movieDTO: UpdateMovieDto = {
        director: 'director',
        title: 'title',
        duration: 100,
        country: Country.US,
        rating: 7,
      };

      await moviesService.update(id, movieDTO);
      expect(updateSpy).toHaveBeenCalledWith(id, movieDTO);
    });
  });
});
