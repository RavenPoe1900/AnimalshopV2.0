import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {UpdatePetDto} from "../pet/dto/update-pet.dto";
import {AnimalEntity} from "./entities/animal.entity";
import {CreateAnimalDto} from "./dto/create-animal.dto";

@Injectable()
export class AnimalService {
    constructor(
        @InjectRepository(AnimalEntity)
        private animalRepository: Repository<AnimalEntity>,
    ) {
    }

    async findAll() {
        return await this.animalRepository.find();
    }

    // async create(data: CreateAnimalDto) {
    //     const animal = this.animalRepository.create(data);
    //     await this.animalRepository.save(data);
    //     return animal;
    // }

    async read(id: number) {
        return await this.animalRepository.findOne({where: {id: id}});
    }

    async update(id: number, data: Partial<UpdatePetDto>) {
        await this.animalRepository.update({id}, data);
        return await this.animalRepository.findOne({id});
    }

    async remove(id: number) {
        await this.animalRepository.delete({id});
        return {deleted: true};
    }

     async findOne(id: number) {
        return await this.animalRepository.findOne(id);
    }
}
