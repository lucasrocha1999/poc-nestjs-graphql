import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserDto } from './dtos/user.dto';
import { CreateOneUserArgs } from './args/create-one-user.args';

@Resolver()
export class GraphqlResolver {
  @Query(() => String)
  users() {
    return 'Hello World';
  }
  @Mutation(() => UserDto)
  createOneUser(@Args() args: CreateOneUserArgs) {
    return args.data;
  }
}
