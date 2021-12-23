import { BreedEntity } from "src/breed/entities/breed.entity";
import { ShopEntity } from "src/shop/entities/shop.entity";
import {IsNumber} from "class-validator";

export class CreateAnimalDto {

  @IsNumber()
  amount: number;

  @IsNumber()
  price: number;

  breed: BreedEntity;

  shop: ShopEntity['id'];
}
