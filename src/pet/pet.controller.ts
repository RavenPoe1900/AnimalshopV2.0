import {Controller, Get, Post, Body, Patch, Param, Delete, Query} from '@nestjs/common';
import { PetService } from './pet.service';
import { AppService } from 'src/app.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import {PetEntity} from "../pet/entities/pet.entity";
import {Ids} from "../dto/ids.dto";

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService,
    private readonly appService: AppService,) {}

  @Post()
    create(@Body() createPetDto: CreatePetDto) {
        const newPetDto = new PetEntity();
        return this.appService.create(createPetDto, newPetDto, null, this.petService);
    }

    @Get()
    findAll(@Query() paginationQuery) {
        const {limit, offset} = paginationQuery;
        return this.appService.findAll(limit, offset, this.petService);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.appService.findOne(+id, this.petService);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
        return this.appService.update(+id, updatePetDto, null, this.petService);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.appService.removeOne(+id, this.petService);
    }

    @Delete()
    removeAll(@Body() data: Ids) {
        return this.appService.removeElements(data.ids, this.petService)
    }
}
