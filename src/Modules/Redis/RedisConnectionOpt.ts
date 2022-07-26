const { REDIS_HOST, REDIS_PORT, REDIS_PASSWORD } = process.env;

export type RedisOptions = {
  host: string;
  port: number;
  password: string;
};

export const redisOptions: RedisOptions = {
  host: REDIS_HOST,
  port: parseInt(REDIS_PORT, 10),
  password: REDIS_PASSWORD,
};
