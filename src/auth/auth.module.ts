import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local/local.strategy';
import {PersonModule} from "../person/person.module";
import {PersonService} from "../person/person.service";

@Module({
  imports: [PersonModule, PassportModule],
  providers: [PersonService, LocalStrategy],
})
export class AuthModule {}
