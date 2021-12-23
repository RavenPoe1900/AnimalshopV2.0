import {Module} from '@nestjs/common';
import {PetService} from './pet.service';
import {PetController} from './pet.controller';
import {PetEntity} from "./entities/pet.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {BreedEntity} from "../breed/entities/breed.entity";

@Module({
    imports: [TypeOrmModule.forFeature([PetEntity])],
    controllers: [PetController],
    providers: [PetService]
})
export class PetModule {
}
