import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import {AuthService} from "../auth.service";

const cookieExtractor = (res)=>{
  return null;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private auth:AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        ExtractJwt.fromAuthHeaderAsBearerToken(),
        cookieExtractor
      ]),
      ignoreExpiration: false,
      secretOrKey: process.env.hashKeySecret,
    });
  }

  async validate(payload: any) {
    return { username: payload.username, objectId: payload.objectId};
  }
}