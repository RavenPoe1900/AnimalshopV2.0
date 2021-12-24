import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {ShopEntity} from "./entities/shop.entity";
import {CreateShopDto} from "./dto/create-shop.dto";
import {UpdateShopDto} from "./dto/update-shop.dto";

@Injectable()
export class ShopService {
    constructor(
        @InjectRepository(ShopEntity)
        private shopRepository: Repository<ShopEntity>,
    ) {
    }

    async create(data: CreateShopDto) {
        const shop = this.shopRepository.create(data);
        await this.shopRepository.save(data);
        return shop;
    }

    async count() {
        return await this.shopRepository.count();
    }

    async findAll(limit, skippedItems) {
        return await this.shopRepository.createQueryBuilder()
            .offset(skippedItems)
            .limit(limit)
            .getMany()
    }

    async findOne(id) {
        return await this.shopRepository.findOne({where: {id: id}});
    }

    async update(id: number, data: Partial<UpdateShopDto>) {
        await this.shopRepository.update({id}, data);
        return await this.shopRepository.findOne({id});
    }

    async remove(id: number) {
        await this.shopRepository.delete({id});
        return {deleted: true};
    }
}
