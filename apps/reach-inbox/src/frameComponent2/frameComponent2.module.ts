import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FrameComponent2ModuleBase } from "./base/frameComponent2.module.base";
import { FrameComponent2Service } from "./frameComponent2.service";
import { FrameComponent2Controller } from "./frameComponent2.controller";

@Module({
  imports: [FrameComponent2ModuleBase, forwardRef(() => AuthModule)],
  controllers: [FrameComponent2Controller],
  providers: [FrameComponent2Service],
  exports: [FrameComponent2Service],
})
export class FrameComponent2Module {}
