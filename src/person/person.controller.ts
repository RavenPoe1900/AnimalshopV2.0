import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Query,
} from '@nestjs/common';
import {PersonService} from './person.service';
import {AppService} from 'src/app.service';
import {CreatePersonDto} from './dto/create-person.dto';
import {UpdatePersonDto} from './dto/update-person.dto';
import {PersonEntity} from "./entities/person.entity";
import {Ids} from "../dto/ids.dto";
import {createHmac} from "crypto";

@Controller('person')
export class PersonController {
    constructor(private readonly personService: PersonService,
                private readonly appService: AppService,) {
    }

    @Post()
    create(@Body() createPersonDto: CreatePersonDto) {
        const newPersonDto = new PersonEntity();
        createPersonDto.password = createHmac(process.env.hashKeyAlgorithm, process.env.hashKeySecret)
                .update(createPersonDto.password)
                .digest('hex');
        return this.appService.create(createPersonDto, newPersonDto, null, this.personService);
    }

    @Get()
    findAll(@Query() paginationQuery) {
        const {limit, offset} = paginationQuery;
        return this.appService.findAll(limit, offset, this.personService);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.appService.findOne(+id, this.personService);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
        if(updatePersonDto.password !== undefined){
             updatePersonDto.password = createHmac(process.env.hashKeyAlgorithm, process.env.hashKeySecret)
                .update(updatePersonDto.password)
                .digest('hex');
        }
        return this.appService.update(+id, updatePersonDto, null, this.personService);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.appService.removeOne(+id, this.personService);
    }

    @Delete()
    removeAll(@Body() data: Ids) {
        return this.appService.removeElements(data.ids, this.personService)
    }
}
