export class CreateServiceDto {
  name: string;
  description: string;
  price: number;
  durationMinutes: number;
  active?: boolean;
}
