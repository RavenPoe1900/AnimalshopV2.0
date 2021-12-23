import {IsNumber, IsString} from "class-validator";
import {PersonEntity} from "../../person/entities/person.entity";
import {BreedEntity} from "../../breed/entities/breed.entity";
import {AnimalEntity} from "../../animal/entities/animal.entity";

export class CreatePetDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  breed: BreedEntity;

  person: PersonEntity;

  animal: AnimalEntity;

}
