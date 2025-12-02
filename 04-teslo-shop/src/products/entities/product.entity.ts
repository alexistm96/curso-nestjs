import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// Representacion del objecto en la base de datos
@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { unique: true })
  title: string;
}
