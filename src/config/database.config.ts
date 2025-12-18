import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { DataSourceOptions } from 'typeorm';

type DatabaseOptions = TypeOrmModuleOptions & DataSourceOptions;

export const buildDatabaseOptions = (
  config?: ConfigService,
): DatabaseOptions => ({
  type: 'postgres',
  host: config?.get<string>('DB_HOST') ?? process.env.DB_HOST,
  port:
    config?.get<number>('DB_PORT', 5432) ?? Number(process.env.DB_PORT ?? 5432),
  username: config?.get<string>('DB_USER') ?? process.env.DB_USER,
  password: config?.get<string>('DB_PASSWORD') ?? process.env.DB_PASSWORD ?? '',
  database: config?.get<string>('DB_NAME') ?? process.env.DB_NAME,
  autoLoadEntities: true,
  synchronize: false,
  logging: true,
  retryAttempts: 5,
  retryDelay: 3000,
});

export const databaseConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (config: ConfigService): TypeOrmModuleOptions =>
    buildDatabaseOptions(config),
};
