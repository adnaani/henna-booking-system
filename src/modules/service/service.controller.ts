import { Body, Controller, Get, Post } from '@nestjs/common';
import { ServiceService } from './service.service';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Service } from './entities/service.entity';
import { CreateServiceDto } from './dto/create-service.dto';

@ApiTags('services')
@Controller('services')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @ApiOperation({
    summary: 'Retrieve every henna service',
    description: 'Returns most recent service first.',
  })
  @ApiOkResponse({
    description: 'Service fetched successfully.',
    type: Service,
    isArray: true,
  })
  @Get()
  async getService() {
    return this.serviceService.findAllServices();
  }

  @ApiOperation({
    summary: 'Create a new henna service.',
    description: 'Validates the payload and stores a henna service.',
  })
  @ApiCreatedResponse({
    description: 'Service created successfully.',
    type: Service,
  })
  @ApiBadRequestResponse({
    description: 'Validation failed for the provided payload.',
  })
  @Post()
  async createService(@Body() createServiceDto: CreateServiceDto) {
    return this.serviceService.addService(createServiceDto);
  }
}
