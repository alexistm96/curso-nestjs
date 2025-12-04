import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductImage {
  @PrimaryGeneratedColumn() // Por defecto usa 'increment'
  id: number;

  @Column({ type: 'text' })
  url: string;
}
