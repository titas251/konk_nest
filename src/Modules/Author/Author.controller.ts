import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { AuthorService } from './Author.service';
import { CreateAuthorDto } from './dto/create-author.dto';

@Controller('authors')
export class AuthorsController {
  constructor(private authorService: AuthorService) {}

  @Post()
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorService.create(createAuthorDto);
  }

  @Get()
  findAll() {
    return this.authorService.findAll();
  }

  @Get(':id')
  find(@Param() params) {
    return this.authorService.findOne(params.id);
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.authorService.remove(params.id);
  }
}
