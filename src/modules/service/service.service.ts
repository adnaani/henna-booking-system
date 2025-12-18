import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from './entities/service.entity';
import { CreateServiceDto } from './dto/create-service.dto';

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>,
  ) {}

  public async findAllServices(): Promise<Service[]> {
    return this.serviceRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  public async addService(
    createServiceDto: CreateServiceDto,
  ): Promise<Service> {
    const services = this.serviceRepository.create(createServiceDto);
    return this.serviceRepository.save(services);
  }
}
