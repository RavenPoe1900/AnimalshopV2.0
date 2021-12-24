import {Controller, Get, Post, Body, Patch, Param, Delete, Query} from '@nestjs/common';
import { AppService } from 'src/app.service';
import { BreedService } from './breed.service';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import {Ids} from "../dto/ids.dto";
import {AnimalEntity} from "../animal/entities/animal.entity";
import {BreedEntity} from "./entities/breed.entity";

@Controller('breed')
export class BreedController {
  constructor(
    private readonly breedService: BreedService,
    private readonly appService: AppService,
    ) {}

  @Post()
  create(@Body() createBreedDto: CreateBreedDto) {
    const newBreedDto = new BreedEntity();
    return this.appService.create(createBreedDto,newBreedDto,  null, this.breedService);
  }

  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return this.appService.findAll(limit, offset, this.breedService);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appService.findOne(+id, this.breedService);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBreedDto: UpdateBreedDto) {
    return this.appService.findByIdAndUpdate(+id, updateBreedDto, null, this.breedService);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appService.removeOne(+id, this.breedService);
  }

  @Delete()
  removeAll(@Body() data: Ids){
    return this.appService.removeElements(data.ids, this.breedService)
  }
}
