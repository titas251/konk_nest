import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from './TypeORM/ConnectionOptions';
import { MovieModule } from './Modules/Movie/Movie.module';
import { AuthorModule } from './Modules/Author/Author.module';
import { UserModule } from './Modules/User/User.module';
import { AuthModule } from './Modules/Auth/Auth.module';
@Module({
  imports: [TypeOrmModule.forRoot(ConnectionOptions), MovieModule, AuthorModule, UserModule, AuthModule],
})
export class AppModule {}
