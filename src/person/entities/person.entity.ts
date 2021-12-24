import {IsString} from 'class-validator';
import {
  Column, Entity,
  PrimaryGeneratedColumn, Unique,
} from 'typeorm';

@Entity()
@Unique(['username'])
export class PersonEntity  {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsString()
  username: string;

  @Column()
  @IsString()
  password: string;

  @Column()
  @IsString()
  img: string;

}
