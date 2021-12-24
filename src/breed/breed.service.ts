import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {CreatePetDto} from "../pet/dto/create-pet.dto";
import {UpdatePetDto} from "../pet/dto/update-pet.dto";
import {BreedEntity} from "./entities/breed.entity";
import {CreateBreedDto} from "./dto/create-breed.dto";

@Injectable()
export class BreedService {
    constructor(
        @InjectRepository(BreedEntity)
        private breedRepository: Repository<BreedEntity>,
    ) {
    }

    async create(data: CreateBreedDto) {
        const pet = this.breedRepository.create(data);
        await this.breedRepository.save(data);
        return pet;
    }

    async count() {
        return await this.breedRepository.count();
    }

    async findAll(limit, skippedItems) {
        return await this.breedRepository.createQueryBuilder()
            .offset(skippedItems)
            .limit(limit)
            .getMany()
    }

    async findOne(id) {
        return await this.breedRepository.findOne({where: {id: id}});
    }

    async update(id: number, data: Partial<UpdatePetDto>) {
        await this.breedRepository.update({id}, data);
        return await this.breedRepository.findOne({id});
    }

    async remove(id: number) {
        await this.breedRepository.delete({id});
        return {deleted: true};
    }
}
