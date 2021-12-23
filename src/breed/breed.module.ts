import { Module } from '@nestjs/common';
import { BreedService } from './breed.service';
import { BreedController } from './breed.controller';
import {BreedEntity} from "./entities/breed.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {AnimalEntity} from "../animal/entities/animal.entity";

@Module({
  imports:[TypeOrmModule.forFeature([BreedEntity])],
  controllers: [BreedController],
  providers: [BreedService]
})
export class BreedModule {}
