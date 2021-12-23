import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {CreateShopDto} from "./dto/create-shop.dto";
import {UpdatePetDto} from "../pet/dto/update-pet.dto";
import {ShopEntity} from "./entities/shop.entity";

@Injectable()
export class ShopService {
   constructor(
        @InjectRepository(ShopEntity)
        private shopRepository: Repository<ShopEntity>,
    ) {
    }

    async findAll() {
        return await this.shopRepository.find();
    }

    async create(data: CreateShopDto) {
        const pet = this.shopRepository.create(data);
        await this.shopRepository.save(data);
        return pet;
    }

    async read(id: number) {
        return await this.shopRepository.findOne({where: {id: id}});
    }

    async update(id: number, data: Partial<UpdatePetDto>) {
        await this.shopRepository.update({id}, data);
        return await this.shopRepository.findOne({id});
    }

    async remove(id: number) {
        await this.shopRepository.delete({id});
        return {deleted: true};
    }

     async findOne(id: number) {
        return await this.shopRepository.findOne(id);
    }
}
