/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FrameComponentWhereInput } from "./FrameComponentWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FrameComponentListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FrameComponentWhereInput,
  })
  @ValidateNested()
  @Type(() => FrameComponentWhereInput)
  @IsOptional()
  @Field(() => FrameComponentWhereInput, {
    nullable: true,
  })
  every?: FrameComponentWhereInput;

  @ApiProperty({
    required: false,
    type: () => FrameComponentWhereInput,
  })
  @ValidateNested()
  @Type(() => FrameComponentWhereInput)
  @IsOptional()
  @Field(() => FrameComponentWhereInput, {
    nullable: true,
  })
  some?: FrameComponentWhereInput;

  @ApiProperty({
    required: false,
    type: () => FrameComponentWhereInput,
  })
  @ValidateNested()
  @Type(() => FrameComponentWhereInput)
  @IsOptional()
  @Field(() => FrameComponentWhereInput, {
    nullable: true,
  })
  none?: FrameComponentWhereInput;
}
export { FrameComponentListRelationFilter as FrameComponentListRelationFilter };
