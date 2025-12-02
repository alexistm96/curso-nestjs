import { Car } from 'src/cars/interfaces/car.interface';
import { randomUUID as uuid } from 'crypto';

export const CARS_SEED: Car[] = [
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
    brand: 'Nissan',
    model: 'Kicks',
  },
];
