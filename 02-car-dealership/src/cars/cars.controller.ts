import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    console.log({ id });
    return this.carsService.findOne(id);
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    const newCar = this.carsService.create(createCarDto);
    return newCar;
  }

  @Patch(':id')
  updateCar(@Body() body: any, @Param('id', ParseUUIDPipe) id: string) {
    return { body, id };
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return id;
  }
}
