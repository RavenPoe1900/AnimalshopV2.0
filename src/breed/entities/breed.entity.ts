import { IsString } from 'class-validator';
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class BreedEntity  {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  @IsString()
  name: string;
}
