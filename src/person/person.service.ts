import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {CreatePetDto} from "../pet/dto/create-pet.dto";
import {UpdatePetDto} from "../pet/dto/update-pet.dto";
import {PersonEntity} from "./entities/person.entity";
import {CreatePersonDto} from "./dto/create-person.dto";

@Injectable()
export class PersonService {
   constructor(
        @InjectRepository(PersonEntity)
        private personRepository: Repository<PersonEntity>,
    ) {
    }

    async findAll() {
        return await this.personRepository.find();
    }

    async create(data: CreatePersonDto) {
        const pet = this.personRepository.create(data);
        await this.personRepository.save(data);
        return pet;
    }

    async read(id: number) {
        return await this.personRepository.findOne({where: {id: id}});
    }

    async update(id: number, data: Partial<UpdatePetDto>) {
        await this.personRepository.update({id}, data);
        return await this.personRepository.findOne({id});
    }

    async remove(id: number) {
        await this.personRepository.delete({id});
        return {deleted: true};
    }

     async findOne(id: any) {
        return await this.personRepository.findOne(id);
    }
}
