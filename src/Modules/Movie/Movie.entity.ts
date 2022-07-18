import { Column, Entity, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';
import { Country } from './types';

@Entity('movie')
export class Movie extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  director: string;

  @Column()
  title: string;

  @Column()
  duration: number;

  @Column({ type: 'enum', enum: Country, default: Country.US })
  country: Country;

  @Column()
  rating: number;
}
