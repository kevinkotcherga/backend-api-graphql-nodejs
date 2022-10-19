import { Arg, ID, Mutation, Query, Resolver } from "type-graphql";
import { Wilder } from "../entities/Wilder";
import datasource from "../utils";

@Resolver()
export class WildersResolver {
  @Mutation(() => Wilder)
  async createWilder(@Arg('city') @Arg('name') name: string, city: string): Promise<Wilder> {
    return await datasource.getRepository(Wilder).save({ name, city });
  }

  @Query(() => [Wilder])
  async wilders(): Promise<Wilder[]> {
    return await datasource
    .getRepository(Wilder)
    .find({relations: ['upvote', 'upvote.skill']});
  }

  @Query(() => Wilder, {nullable: true})
  async wilder(@Arg('id', () => ID) id: number): Promise<Wilder | null> {
    return await datasource
    .getRepository(Wilder)
    .findOne({ where: {id}, relations: ["upvote", "upvote.skill"]})
  }
}
