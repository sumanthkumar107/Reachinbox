import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FrameComponent1ModuleBase } from "./base/frameComponent1.module.base";
import { FrameComponent1Service } from "./frameComponent1.service";
import { FrameComponent1Controller } from "./frameComponent1.controller";

@Module({
  imports: [FrameComponent1ModuleBase, forwardRef(() => AuthModule)],
  controllers: [FrameComponent1Controller],
  providers: [FrameComponent1Service],
  exports: [FrameComponent1Service],
})
export class FrameComponent1Module {}
