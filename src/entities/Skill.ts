import { Field, ID, ObjectType } from 'type-graphql';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import { Upvote } from './Upvote';

@Entity()
@ObjectType()
export class Skill {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Upvote,(upvote) => upvote.skill)
  @Field(() => [Upvote])
  upvote: Upvote[];
}
