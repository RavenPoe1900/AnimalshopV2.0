import {Module} from '@nestjs/common';
import {PersonService} from './person.service';
import {PersonController} from './person.controller';
import {PersonEntity} from "./entities/person.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {BreedEntity} from "../breed/entities/breed.entity";
import {BreedService} from "../breed/breed.service";
import {AppService} from "../app.service";

@Module({
    imports: [TypeOrmModule.forFeature([PersonEntity])],
    controllers: [PersonController],
    providers: [PersonService, AppService],
    exports:[PersonService],
})
export class PersonModule {
}
