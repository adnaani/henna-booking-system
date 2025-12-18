import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BookingService } from './booking-service.entity';

@Entity('bookings')
export class Booking {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  customerName: string;

  @Column()
  customerEmail: string;

  @Column()
  customerPhone: string;

  @Column('date')
  bookingDate: string;

  @Column('time')
  bookingTime: string;

  @Column({ default: 'PENDING' })
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';

  @Column('decimal')
  totalPrice: number;

  @Column('text', { nullable: true })
  notes?: string;

  @OneToMany(() => BookingService, (bs) => bs.booking, { cascade: true })
  services: BookingService[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
