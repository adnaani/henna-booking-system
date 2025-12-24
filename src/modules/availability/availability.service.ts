import { Injectable } from '@nestjs/common';
import { GetAvailabilityDto } from './dto/get-availability.dto';
import { ServiceService } from '../service/service.service';

type AvailabilitySlot = {
  start: string;
  end: string;
  durationMinutes: number;
};

@Injectable()
export class AvailabilityService {
  constructor(private readonly serviceService: ServiceService) {}

  async getSlots(getAvailabilityDto: GetAvailabilityDto) {
    const services = await this.serviceService.findServicesByIds(
      getAvailabilityDto.serviceIds,
    );

    const baseDuration = services.reduce(
      (total, service) => total + service.durationMinutes,
      0,
    );
    const totalDurationMinutes =
      baseDuration * Math.max(getAvailabilityDto.groupSize, 1);
    const bufferMinutes = 15;
    const requiredMinutes = totalDurationMinutes + bufferMinutes;

    const openingMinutes = 11 * 60;
    const closingMinutes = 21 * 60;
    const stepMinutes = 30;

    const slots: AvailabilitySlot[] = [];
    for (
      let start = openingMinutes;
      start + requiredMinutes <= closingMinutes;
      start += stepMinutes
    ) {
      const end = start + requiredMinutes;
      slots.push({
        start: this.formatMinutes(start),
        end: this.formatMinutes(end),
        durationMinutes: requiredMinutes,
      });
    }

    return {
      date: getAvailabilityDto.date,
      locationType: getAvailabilityDto.locationType,
      groupSize: getAvailabilityDto.groupSize,
      services,
      totalDurationMinutes,
      slots,
    };
  }

  private formatMinutes(totalMinutes: number): string {
    const hours = Math.floor(totalMinutes / 60)
      .toString()
      .padStart(2, '0');
    const minutes = (totalMinutes % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }
}
