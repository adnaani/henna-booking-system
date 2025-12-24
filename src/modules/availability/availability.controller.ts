import { Body, Controller, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetAvailabilityDto } from './dto/get-availability.dto';
import { AvailabilityService } from './availability.service';
import {
  availabilityRequestExample,
  availabilityResponseExample,
} from './docs/availability.examples';

@ApiTags('availability')
@Controller('availability')
export class AvailabilityController {
  constructor(private readonly availabilityService: AvailabilityService) {}

  @ApiOperation({
    summary: 'Get available slots',
    description:
      'Returns available booking slots for the given date, services, location type, and group size.',
  })
  @ApiOkResponse({
    description: 'Slots calculated successfully.',
    schema: { example: availabilityResponseExample },
  })
  @ApiBadRequestResponse({
    description: 'Validation failed for the provided payload.',
  })
  @ApiBody({
    type: GetAvailabilityDto,
    examples: {
      default: {
        summary: 'Mobile booking example',
        value: availabilityRequestExample,
      },
    },
  })
  @Post('slot')
  async createSlot(@Body() getAvailabilityDto: GetAvailabilityDto) {
    return this.availabilityService.getSlots(getAvailabilityDto);
  }
}
