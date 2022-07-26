import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from './TypeORM/ConnectionOptions';
import { MovieModule } from './Modules/Movie/Movie.module';
import { AuthorModule } from './Modules/Author/Author.module';
import { UserModule } from './Modules/User/User.module';
import { AuthModule } from './Modules/Auth/Auth.module';
import * as redisStore from 'cache-manager-redis-store';
import { redisOptions } from './Modules/Redis/RedisConnectionOpt';

@Module({
  imports: [
    TypeOrmModule.forRoot(ConnectionOptions),
    CacheModule.register({
      store: redisStore,
      isGlobal: true,
      ...redisOptions,
    }),
    MovieModule,
    AuthorModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
