import { CreateBookingServiceDto } from './create-booking-service.dto';

export class CreateBookingDto {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  bookingDate: string;
  bookingTime: string;
  status?: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
  totalPrice: number;
  notes?: string;
  services: CreateBookingServiceDto[];
}
