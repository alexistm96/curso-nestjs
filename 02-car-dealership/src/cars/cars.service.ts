import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { randomUUID as uuid } from 'crypto';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   brand: 'Toyota',
    //   model: 'Corolla',
    // },
    // {
    //   id: uuid(),
    //   brand: 'Honda',
    //   model: 'Civic',
    // },
    // {
    //   id: uuid(),
    //   brand: 'Ford',
    //   model: 'Focus',
    // },
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

  update(id: string, updateCarDto: UpdateCarDto) {
    let foundCar = this.findOne(id);
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        foundCar = {
          ...foundCar,
          ...updateCarDto,
          id,
        };
        console.log({ foundCar });
        return foundCar;
      }

      return car;
    });

    return foundCar;
  }

  delete(id: string) {
    const carToDelete = this.findOne(id);

    this.cars = this.cars.filter((car) => car.id !== id);
    return;
  }
}
