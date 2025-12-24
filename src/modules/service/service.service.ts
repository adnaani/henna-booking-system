import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
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

  public async findServicesByIds(ids: string[]): Promise<Service[]> {
    if (!ids.length) {
      return [];
    }

    const services = await this.serviceRepository.find({
      where: { id: In(ids) },
    });

    if (services.length !== ids.length) {
      throw new NotFoundException('One or more services were not found');
    }

    return services;
  }

  public async addService(
    createServiceDto: CreateServiceDto,
  ): Promise<Service> {
    const services = this.serviceRepository.create(createServiceDto);
    return this.serviceRepository.save(services);
  }
}
