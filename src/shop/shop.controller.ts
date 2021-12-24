import {Controller, Get, Post, Body, Patch, Param, Delete, Query} from '@nestjs/common';
import {ShopService} from './shop.service';
import {AppService} from 'src/app.service';
import {CreateShopDto} from './dto/create-shop.dto';
import {UpdateShopDto} from './dto/update-shop.dto';
import {Ids} from "../dto/ids.dto";
import {ShopEntity} from "./entities/shop.entity";

@Controller('shop')
export class ShopController {
    constructor(private readonly shopService: ShopService,
                private readonly appService: AppService,) {
    }

    @Post()
    create(@Body() createShopDto: CreateShopDto) {
        const newShopDto = new ShopEntity();
        return this.appService.create(createShopDto, newShopDto, null, this.shopService);
    }

    @Get()
    findAll(@Query() paginationQuery) {
        const {limit, offset} = paginationQuery;
        return this.appService.findAll(limit, offset, this.shopService);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.appService.findOne(+id, this.shopService);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateShopDto: UpdateShopDto) {
        return this.appService.findByIdAndUpdate(+id, updateShopDto, null, this.shopService);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.appService.removeOne(+id, this.shopService);
    }

    @Delete()
    removeAll(@Body() data: Ids) {
        return this.appService.removeElements(data.ids, this.shopService)
    }
}
