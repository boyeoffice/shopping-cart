import { Connection, createConnection } from 'typeorm';
import config from './config/ormconfig';

export const dbCreateConnection = async (): Promise<Connection | null> => {
  try {
    const typeormconfig = await config;
    const conn = await createConnection(typeormconfig);
    console.log(
      `Database connection success. Connection name: '${conn.name}' Database: '${conn.options.database}'`
    );
  } catch (err) {
    console.log(err);
  }
  return null;
};
