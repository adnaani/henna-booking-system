import { Body, Controller, Post } from '@nestjs/common';
import { GetAvailabilityDto } from './dto/get-availability.dto';
import { AvailabilityService } from './availability.service';

@Controller('availability')
export class AvailabilityController {
  constructor(private readonly availabilityService: AvailabilityService) {}
  @Post('slot')
  async createSlot(@Body() getAvailabilityDto: GetAvailabilityDto) {
    return this.availabilityService.getSlots(getAvailabilityDto);
  }
}
