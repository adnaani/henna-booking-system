import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Booking } from './booking.entity';

@Entity('payments')
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Booking, { onDelete: 'CASCADE' })
  booking: Booking;

  @Column('decimal')
  amount: number;

  @Column()
  status: 'PENDING' | 'PAID' | 'REFUNDED';

  @Column()
  method: string;

  @CreateDateColumn()
  createdAt: Date;
}
