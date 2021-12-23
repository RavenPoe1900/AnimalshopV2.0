import {Injectable} from '@nestjs/common';
import {CreatePetDto} from './dto/create-pet.dto';
import {UpdatePetDto} from './dto/update-pet.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {PetEntity} from "./entities/pet.entity";
import {Repository} from "typeorm";

@Injectable()
export class PetService {

    constructor(
        @InjectRepository(PetEntity)
        private petsRepository: Repository<PetEntity>,
    ) {
    }

    async findAll() {
        return await this.petsRepository.find();
    }

    async create(data: CreatePetDto) {
        const pet = this.petsRepository.create(data);
        await this.petsRepository.save(data);
        return pet;
    }

    async read(id: number) {
        return await this.petsRepository.findOne({where: {id: id}});
    }

    async update(id: number, data: Partial<UpdatePetDto>) {
        await this.petsRepository.update({id}, data);
        return await this.petsRepository.findOne({id});
    }

    async remove(id: number) {
        await this.petsRepository.delete({id});
        return {deleted: true};
    }

     async findOne(id: number) {
        return await this.petsRepository.findOne(id);
    }
}


