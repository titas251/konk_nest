import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsController } from './Author.controller';
import { Author } from './Author.entity';
import { AuthorService } from './Author.service';

@Module({
  imports: [TypeOrmModule.forFeature([Author])],
  providers: [AuthorService],
  controllers: [AuthorsController],
})
export class AuthorModule {}
