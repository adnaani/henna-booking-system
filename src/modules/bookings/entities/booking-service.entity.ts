import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Service } from '../../service/entities/service.entity';
import { Booking } from './booking.entity';

@Entity('booking_services')
export class BookingService {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Booking, (booking) => booking.services, {
    onDelete: 'CASCADE',
  })
  booking: Booking;

  @ManyToOne(() => Service, { eager: true })
  service: Service;

  @Column({ default: 1 })
  quantity: number;
}
