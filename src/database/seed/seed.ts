import 'reflect-metadata';
import { AppDataSource } from '../data-source';
import { seedAdmin } from './admin.seed';
import { seedServices } from './services.seed';

async function seed() {
  await AppDataSource.initialize();

  await seedAdmin();
  await seedServices();

  await AppDataSource.destroy();
  console.log('✅ Seeding complete');
}

seed().catch((err) => {
  console.error('❌ Seeding failed', err);
  process.exit(1);
});
