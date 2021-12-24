import {CacheModule, Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {PersonModule} from './person/person.module';
import {ConfigModule} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PetModule} from './pet/pet.module';
import {AnimalModule} from "./animal/animal.module";
import {BreedModule} from "./breed/breed.module";
import {ShopModule} from "./shop/shop.module";
import {AuthModule} from "./auth/auth.module";

@Module({
    imports: [
        ConfigModule.forRoot({
        isGlobal: true,
        }),
        TypeOrmModule.forRoot({
            type: process.env.DB_TYPE as 'mysql',
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT),
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            autoLoadEntities: true,
            synchronize: true,
        }),
        AnimalModule,
        BreedModule,
        PersonModule,
        PetModule,
        ShopModule,
        AuthModule,
        CacheModule.register()
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
