import { ConnectionOptions } from 'typeorm';

import dotenv from 'dotenv';
dotenv.config();

const getOptions = async () => {
  const connectionOptions: ConnectionOptions = {
    type: 'postgres',
    synchronize: false,
    logging: false,
    entities: ['src/typeorm/entities/*.ts'],
    migrations: ['src/typeorm/migrations/*.ts'],
    subscribers: ['src/typeorm/subscriber/*.ts'],
    cli: {
      entitiesDir: 'src/typeorm/entities',
      migrationsDir: 'src/typeorm/migrations',
      subscribersDir: 'src/typeorm/subscriber'
    }
  };
  if (process.env.NODE_ENV === 'production') {
    Object.assign(connectionOptions, {
      url: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }
    });
  } else {
    Object.assign(connectionOptions, {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE
    });
  }
  return connectionOptions;
};

const config = getOptions();

export = config;
