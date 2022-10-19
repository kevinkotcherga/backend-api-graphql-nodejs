import { Field, ID, ObjectType } from 'type-graphql';
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

  @OneToMany(() => Upvote,(upvote) => upvote.wilder)
  @Field(() => [Upvote])
  upvote: Upvote[];
}
