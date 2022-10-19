// import { IsIn, Length } from 'class-validator';
import { Field, ID, InputType, ObjectType } from 'type-graphql';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import { Upvote } from './Upvote';

@Entity()
@ObjectType()
export class Wilder {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  city: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  age: number;

  @OneToMany(() => Upvote, "wilder")
  @Field(() => [Upvote])
  upvote: Upvote[];
}

@InputType()
export class WilderInput {
  @Field()
  // @Length(2, 50)
  name: string;

  @Field()
  // @IsIn(["Villeurbanne", "Lyon"])
  city: string;

  @Field({ nullable: true })
  age: number;
}
