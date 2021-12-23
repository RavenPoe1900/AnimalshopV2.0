import {IsString} from 'class-validator';
import {
  Column, Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BreedEntity } from 'src/breed/entities/breed.entity';
import {PersonEntity} from "../../person/entities/person.entity";
import {AnimalEntity} from "../../animal/entities/animal.entity";

@Entity()
export class PetEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  name: string;

  @OneToOne(() => BreedEntity)
  @JoinColumn()
  breed: BreedEntity;

  @ManyToOne(() => PersonEntity, (person) => person.id)
  person: PersonEntity;

  @OneToOne(() => AnimalEntity)
  @JoinColumn()
  animal: AnimalEntity;
}
