import { Injectable } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';
import { initialData } from './data/seed-data';
import { Product } from 'src/products/entities';

@Injectable()
export class SeedService {
  constructor(private readonly productsService: ProductsService) {}

  async runSeed() {
    await this.insertNewProducts();
  }

  private async insertNewProducts() {
    await this.productsService.deleteAllProducts();

    const products = initialData.products;

    const insertPromises: Promise<any>[] = [];

    products.forEach((prod) => {
      insertPromises.push(this.productsService.create(prod));
    });

    await Promise.all(insertPromises);

    return true;
  }
}
