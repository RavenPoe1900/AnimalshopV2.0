import {Controller, Get, Post, Body, Patch, Param, Delete, Query} from '@nestjs/common';
import {AnimalService} from './animal.service';
import {AppService} from 'src/app.service';
import {CreateAnimalDto} from './dto/create-animal.dto';
import {UpdateAnimalDto} from './dto/update-animal.dto';
import {AnimalEntity} from "./entities/animal.entity";
import {Ids} from "../dto/ids.dto";

@Controller('animal')
export class AnimalController {
    constructor(private readonly animalService: AnimalService, private readonly appService: AppService,) {
    }

    @Post()
    create(@Body() createAnimalDto: CreateAnimalDto) {
        const newAnimalDto = new AnimalEntity();
        return this.appService.create(createAnimalDto, newAnimalDto, null, this.animalService);
    }

    @Get()
    findAll(@Query() paginationQuery) {
        const {limit, offset} = paginationQuery;
        return this.appService.findAll(limit, offset, this.animalService);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.appService.findOne(+id, this.animalService);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateAnimalDto: UpdateAnimalDto) {
        return this.appService.findByIdAndUpdate(+id, updateAnimalDto, null, this.animalService);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.appService.removeOne(+id, this.animalService);
    }

    @Delete()
    removeAll(@Body() data: Ids) {
        return this.appService.removeElements(data.ids, this.animalService)
    }
}
