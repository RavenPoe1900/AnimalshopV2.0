import { IsString } from 'class-validator';
import { AnimalEntity  } from 'src/animal/entities/animal.entity';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class ShopEntity  {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  @IsString()
  name: string;

  @OneToMany(() => AnimalEntity , (animal) => animal.shop)
  animals: AnimalEntity [];
}
