import {IsNumber, IsString} from "class-validator";
import {PersonEntity} from "../../person/entities/person.entity";
import {BreedEntity} from "../../breed/entities/breed.entity";
import {AnimalEntity} from "../../animal/entities/animal.entity";

export class CreatePetDto {


  @IsString()
  name: string;

  @IsNumber()
  breed: number;

  @IsNumber()
  person: number;

  @IsNumber()
  animal: number;

}
