import {
  Column,
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { Author } from '../Author/Author.entity';
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

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    nullable: true,
  })
  deletedAt?: Date;

  @OneToMany(() => Author, (author) => author.movie)
  authors: Author[];
}
