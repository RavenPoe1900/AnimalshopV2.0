import { IsNotEmpty, IsString } from 'class-validator';
export class CreatePersonDto {
    @IsString()
    readonly name: string;

    @IsString()
    readonly username: string;

    @IsString()
    password: string;

    @IsNotEmpty()
    readonly img: string;
}
