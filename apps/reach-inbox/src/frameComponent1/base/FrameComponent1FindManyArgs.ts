/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FrameComponent1WhereInput } from "./FrameComponent1WhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FrameComponent1OrderByInput } from "./FrameComponent1OrderByInput";

@ArgsType()
class FrameComponent1FindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FrameComponent1WhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FrameComponent1WhereInput, { nullable: true })
  @Type(() => FrameComponent1WhereInput)
  where?: FrameComponent1WhereInput;

  @ApiProperty({
    required: false,
    type: [FrameComponent1OrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FrameComponent1OrderByInput], { nullable: true })
  @Type(() => FrameComponent1OrderByInput)
  orderBy?: Array<FrameComponent1OrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FrameComponent1FindManyArgs as FrameComponent1FindManyArgs };
