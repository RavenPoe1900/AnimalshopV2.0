import {Module} from '@nestjs/common';
import {PassportModule} from '@nestjs/passport';
import {LocalStrategy} from './local/local.strategy';
import {PersonModule} from "../person/person.module";
import {JwtModule} from "@nestjs/jwt";
import {AuthService} from "./auth.service";
import {JwtStrategy} from "./jwt/jwt.strategy";
import {AppService} from "../app.service";

@Module({
    imports: [PersonModule, PassportModule,
        JwtModule.register({
            secret: process.env.hashKeySecret,
            signOptions: {expiresIn: '60s'},
        }),
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy, PassportModule, AppService],
    exports: [AuthService]
})
export class AuthModule {
}
