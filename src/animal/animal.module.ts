import { Module } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalController } from './animal.controller';
import {AnimalEntity} from "./entities/animal.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {BreedService} from "../breed/breed.service";
import {AppService} from "../app.service";

@Module({
  imports: [TypeOrmModule.forFeature([AnimalEntity])],
  controllers: [AnimalController],
  providers: [AnimalService, AppService]
})
export class AnimalModule {}
