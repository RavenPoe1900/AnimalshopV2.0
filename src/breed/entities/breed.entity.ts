import { IsString } from 'class-validator';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {AnimalEntity} from "../../animal/entities/animal.entity";

@Entity()
export class BreedEntity  {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  @IsString()
  name: string;

  @OneToMany(() => AnimalEntity , (animal) => animal.shop)
  animals: AnimalEntity [];
}
