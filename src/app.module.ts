import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from './TypeORM/ConnectionOptions';
import { MovieModule } from './Modules/Movie/Movie.module';
import { AuthorModule } from './Modules/Author/Author.module';
@Module({
  imports: [TypeOrmModule.forRoot(ConnectionOptions), MovieModule, AuthorModule],
})
export class AppModule {}
