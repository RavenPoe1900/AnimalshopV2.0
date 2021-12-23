import {Injectable} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {PersonService} from "../person/person.service";
import {createHmac} from "crypto";

@Injectable()
export class AuthService {
    constructor(
        private personService: PersonService,
        private jwtService: JwtService,
    ) {
    }


    async validateUser(username: string, pass: string): Promise<any> {
        const user = (await this.personService.findOne(username)) as any;

        if (user) {
            const hash = createHmac(process.env.hashKeyAlgorithm, process.env.hashKeySecret)
                .update(pass)
                .digest('hex');
            if (hash === user.password) {
                const {password, ...result} = user;
                return result;
            }
        }
        return null;
    }

    async login(person: any) {
        const payload = {username: person.name, objectId: person._id.toString()};
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}