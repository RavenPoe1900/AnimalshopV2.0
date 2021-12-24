import {IsNumber} from "class-validator";

export class Ids {

    @IsNumber({}, {each: true})
    ids: number;
}