import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {AnimalEntity} from "./entities/animal.entity";
import {CreateAnimalDto} from "./dto/create-animal.dto";
import {UpdateAnimalDto} from "./dto/update-animal.dto";

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

    async create(data: CreateAnimalDto) {
        const newAnimalDto = new AnimalEntity();
        const animalToSave = Object.assign(newAnimalDto, data)
        const animal = this.animalRepository.create(animalToSave);
        await this.animalRepository.save(animalToSave);
        return animal;
    }

    async read(id: number) {
        return await this.animalRepository.findOne({where: {id: id}});
    }

    async update(id: number, data: Partial<UpdateAnimalDto>) {
        // const toUpdate = await this.
        // const newAnimalDto = new AnimalEntity();
        // const updateAnimalDto = Object.assign(newAnimalDto,)
        // await this.animalRepository.update({id}, data);
        // return await this.animalRepository.findOne({id});
        return [];
    }

    async count() {
        return await this.animalRepository.count();
    }

    async remove(id: number) {
        await this.animalRepository.delete({id});
        return {deleted: true};
    }

    async findOne(id: number) {
        return await this.animalRepository.findOne(id);
    }
}
