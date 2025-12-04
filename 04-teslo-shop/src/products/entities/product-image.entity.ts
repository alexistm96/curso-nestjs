import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from '.';

@Entity()
export class ProductImage {
  @PrimaryGeneratedColumn() // Por defecto usa 'increment'
  id: number;

  @Column({ type: 'text' })
  url: string;

  @ManyToOne(() => Product, (product) => product.images)
  // @JoinColumn({ name: 'product_id' }) // Personalizar nombre y otras opciones
  product: Product;
}
