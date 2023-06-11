import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AddressUserDto {
  @Field()
  street: string;

  @Field()
  number: number;

  @Field()
  city: string;

  @Field()
  state: string;
}

@ObjectType()
export class UserDto {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field(() => [AddressUserDto])
  address: AddressUserDto[];
}
