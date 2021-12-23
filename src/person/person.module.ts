import {Module} from '@nestjs/common';
import {PersonService} from './person.service';
import {PersonController} from './person.controller';
import {PersonEntity} from "./entities/person.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {BreedEntity} from "../breed/entities/breed.entity";

@Module({
    imports: [TypeOrmModule.forFeature([PersonEntity])],
    controllers: [PersonController],
    providers: [PersonService]
})
export class PersonModule {
}