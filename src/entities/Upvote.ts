import { ObjectType, Field, ID } from 'type-graphql';
import {Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import { Skill } from './Skill';
import { Wilder } from './Wilder';

@Entity()
@Index(["wilder", "skill"], {unique: true})
@ObjectType()
export class Upvote {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column({default: 0})
  @Field()
  upvote: number;

  @ManyToOne(() => Skill,(skill) => skill.upvote)
  @Field(() => Skill)
  skill: Skill;

  @ManyToOne(() => Wilder,(wilder) => wilder.upvote, {onDelete: "CASCADE"})
  @Field(() => Wilder)
  wilder: Wilder;
}
