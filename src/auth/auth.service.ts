import {Injectable} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {PersonService} from "../person/person.service";
import {createHmac} from "crypto";
import {AppService} from "../app.service";
import {ConfigService} from "@nestjs/config";

@Injectable()
export class AuthService {
    constructor(
        private personService: PersonService,
        private appService: AppService,
        private jwtService: JwtService) {
    }


    async validateUser(username: string, pass: string): Promise<any> {
        const user = (await this.appService.findUserName(username, this.personService)) as any;

        if (user) {
            const hash = createHmac(process.env.hashKeyAlgorithm, process.env.hashKeySecret)
                .update(pass)
                .digest('hex');
            if (hash === user.password) {
                const {password, ...result} = user;
                return password;
            }
        }
        return null;
    }

    async login(password: string) {
        return {
            access_token: password,
        };
    }
}