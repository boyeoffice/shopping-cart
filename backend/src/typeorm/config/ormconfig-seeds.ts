import { User } from '../entities/user.entity'

import dotenv from 'dotenv';
dotenv.config();

export default {
  name: "default",
  type: "postgres",
  entities: [User],
  synchronize: true,
  logging: false,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  // These two lines have been added:
  seeds: ['src/typeorm/seeds/*.ts'],
  factories: ['src/typeorm/factories/*.ts'],
}
