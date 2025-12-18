import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { buildDatabaseOptions } from '../config/database.config';

const dataSourceOptions = buildDatabaseOptions();

export const AppDataSource = new DataSource({
  ...dataSourceOptions,
  entities: [__dirname + '/../modules/**/entities/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  synchronize: false,
});
