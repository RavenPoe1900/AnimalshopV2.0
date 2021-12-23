import {IsString} from 'class-validator';
import {
  Column, Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
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
