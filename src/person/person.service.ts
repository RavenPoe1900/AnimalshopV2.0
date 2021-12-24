import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {UpdatePetDto} from "../pet/dto/update-pet.dto";
import {PersonEntity} from "./entities/person.entity";
import {CreatePersonDto} from "./dto/create-person.dto";
import {UpdatePersonDto} from "./dto/update-person.dto";

@Injectable()
export class PersonService {
   constructor(
        @InjectRepository(PersonEntity)
        private personRepository: Repository<PersonEntity>,
    ) {
    }


    async create(data: CreatePersonDto) {
        const person = this.personRepository.create(data);
        await this.personRepository.save(data);
        return person;
    }

    async count() {
        return await this.personRepository.count();
    }

    async findAll(limit, skippedItems) {
        return await this.personRepository.createQueryBuilder()
            .offset(skippedItems)
            .limit(limit)
            .getMany()
    }

    async findOne(id) {
        return await this.personRepository.findOne({where: {id: id}});
    }

    async findOneUserName(id) {
        return await this.personRepository.findOne({where: {username: id}});
    }

    async update(id: number, data: Partial<UpdatePersonDto>) {
        await this.personRepository.update({id}, data);
        return await this.personRepository.findOne({id});
    }

    async remove(id: number) {
        await this.personRepository.delete({id});
        return {deleted: true};
    }
}
