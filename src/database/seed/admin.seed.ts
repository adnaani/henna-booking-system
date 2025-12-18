import * as bcrypt from 'bcryptjs';
import { AppDataSource } from '../data-source';
import { User } from '../../modules/user/entities/user.entity';

export async function seedAdmin() {
  const repo = AppDataSource.getRepository(User);

  const exists = await repo.findOne({
    where: { email: 'admin@henna.co.uk' },
  });

  if (exists) return;

  const passwordHash = await bcrypt.hash('admin123', 10);
  await repo.save({
    email: 'admin@henna.co.uk',
    passwordHash,
    role: 'ADMIN',
  });

  console.log('👤 Admin user seeded');
}
