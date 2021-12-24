import {Module} from '@nestjs/common';
import {PetService} from './pet.service';
import {PetController} from './pet.controller';
import {PetEntity} from "./entities/pet.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {BreedEntity} from "../breed/entities/breed.entity";
import {BreedService} from "../breed/breed.service";
import {AppService} from "../app.service";

@Module({
    imports: [TypeOrmModule.forFeature([PetEntity])],
    controllers: [PetController],
    providers: [PetService, AppService]
})
export class PetModule {
}
