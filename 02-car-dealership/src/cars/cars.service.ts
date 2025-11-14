import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { randomUUID as uuid } from 'crypto';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Ford',
      model: 'Focus',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOne(id: string) {
    const foundCar = this.cars.find((car) => car.id === id);
    if (!foundCar) throw new NotFoundException(`Car with id ${id} not found`);
    return foundCar;
  }

  create(createCarDto: CreateCarDto) {
    const newCar: Car = {
      id: uuid(),
      ...createCarDto,
    };

    this.cars.push(newCar);

    return newCar;
  }
}
