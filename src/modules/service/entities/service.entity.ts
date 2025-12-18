import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('services')
export class Service {
  @ApiProperty({
    description: 'Unique identifier for the service.',
    example: 'c9f72a8c-5bd9-4db3-9d6a-fb2a42a8af21',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    description: 'Display name of the henna service.',
    example: 'Bridal Henna',
  })
  @Column()
  name: string;

  @ApiProperty({
    description: 'Detailed description of what the service includes.',
    example: 'Full bridal henna package for hands and feet.',
  })
  @Column('text')
  description: string;

  @ApiProperty({
    description: 'Base price of the service.',
    example: 250,
  })
  @Column('decimal')
  price: number;

  @ApiProperty({
    description: 'Duration of the service in minutes.',
    example: 180,
  })
  @Column()
  durationMinutes: number;

  @ApiProperty({
    description: 'Whether the service is currently offered for booking.',
    example: true,
  })
  @Column({ default: true })
  active: boolean;

  @ApiProperty({
    description: 'Timestamp when the service was created.',
    example: '2025-01-01T09:00:00.000Z',
  })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({
    description: 'Timestamp when the service was last updated.',
    example: '2025-01-02T12:15:00.000Z',
  })
  @UpdateDateColumn()
  updatedAt: Date;
}
