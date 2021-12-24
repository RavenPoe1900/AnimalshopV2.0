import {IsNumber} from "class-validator";

export class CreateAnimalDto {

    @IsNumber()
    amount: number;

    @IsNumber()
    price: number;

    @IsNumber()
    breed: number;

    @IsNumber()
    shop: number;
}
