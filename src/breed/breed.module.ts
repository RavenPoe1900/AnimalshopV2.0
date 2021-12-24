import { Module } from '@nestjs/common';
import { BreedService } from './breed.service';
import { BreedController } from './breed.controller';
import {BreedEntity} from "./entities/breed.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {AppService} from "../app.service";

@Module({
  imports:[TypeOrmModule.forFeature([BreedEntity])],
  controllers: [BreedController],
  providers: [BreedService, AppService]
})
export class BreedModule {}
