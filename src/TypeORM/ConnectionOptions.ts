import { DataSourceOptions } from 'typeorm';

const { MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_DATABASE, MYSQL_HOST, MYSQL_PORT } = process.env;

export const ConnectionOptions: DataSourceOptions = {
  entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
  timezone: 'Z',
  type: 'mysql',
  host: MYSQL_HOST,
  port: parseInt(MYSQL_PORT, 10),
  username: MYSQL_USERNAME,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
  synchronize: true,
  bigNumberStrings: false,
  logging: true,
};
