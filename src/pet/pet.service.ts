import {Injectable} from '@nestjs/common';
import {CreatePetDto} from './dto/create-pet.dto';
import {UpdatePetDto} from './dto/update-pet.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {PetEntity} from "./entities/pet.entity";
import {Repository} from "typeorm";
import {AnimalEntity} from "../animal/entities/animal.entity";

@Injectable()
export class PetService {

    constructor(
        @InjectRepository(PetEntity)
        private petsRepository: Repository<PetEntity>,
    ) {
    }

    async create(data: CreatePetDto) {
        const newPetDto = new PetEntity();
        const petToSave = Object.assign(newPetDto, data)
        const pet = this.petsRepository.create(petToSave);
        await this.petsRepository.save(petToSave);
        return pet;
    }

    async count() {
        return await this.petsRepository.count();
    }

    async findAll(limit, skippedItems) {
        return await this.petsRepository.createQueryBuilder()
            .offset(skippedItems)
            .limit(limit)
            .getMany()
    }

    async findOne(id) {
        return await this.petsRepository.findOne({where: {id: id}});
    }

    // async update(id: number, data: Partial<UpdatePetDto>) {
    //     await this.petsRepository.update({id}, data);
    //     return await this.petsRepository.findOne({id});
    // }

    async remove(id: number) {
        await this.petsRepository.delete({id});
        return {deleted: true};
    }
}


