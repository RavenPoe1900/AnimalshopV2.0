import { IsNumber } from 'class-validator';
import { ShopEntity  } from 'src/shop/entities/shop.entity';
import {
  Column, Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BreedEntity  } from 'src/breed/entities/breed.entity';

@Entity('')
export class AnimalEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNumber()
  price: number;

  @Column()
  @IsNumber()
  amount: number;

  @OneToOne(() => BreedEntity )
  @JoinColumn()
  breed: BreedEntity ;

  @ManyToOne(() => ShopEntity , (shop) => shop.animals)
  shop: ShopEntity ;
}
