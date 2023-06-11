import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AddressUserInput {
  @Field()
  street: string;

  @Field()
  number: number;

  @Field()
  city: string;

  @Field()
  state: string;
}

@InputType()
export class CreateOneUserInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field(() => [AddressUserInput])
  address: AddressUserInput[];
}
