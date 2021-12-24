import { Module } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';
import {ShopEntity} from "./entities/shop.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {BreedService} from "../breed/breed.service";
import {AppService} from "../app.service";

@Module({
  imports:[TypeOrmModule.forFeature([ShopEntity])],
  controllers: [ShopController],
  providers: [ShopService, AppService]
})
export class ShopModule {}
