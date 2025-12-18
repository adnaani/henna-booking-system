import { AppDataSource } from '../data-source';
import { Service } from '../../modules/service/entities/service.entity';

export async function seedServices() {
  const repo = AppDataSource.getRepository(Service);

  const count = await repo.count();
  if (count > 0) return;

  await repo.save([
    {
      name: 'Bridal Henna',
      description: 'Full bridal henna package',
      price: 250,
      durationMinutes: 180,
    },
    {
      name: 'Party Henna',
      description: 'Henna for parties and events',
      price: 60,
      durationMinutes: 60,
    },
  ]);

  console.log('💅 Services seeded');
}
