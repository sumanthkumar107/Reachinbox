import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FrameComponentModuleBase } from "./base/frameComponent.module.base";
import { FrameComponentService } from "./frameComponent.service";
import { FrameComponentController } from "./frameComponent.controller";

@Module({
  imports: [FrameComponentModuleBase, forwardRef(() => AuthModule)],
  controllers: [FrameComponentController],
  providers: [FrameComponentService],
  exports: [FrameComponentService],
})
export class FrameComponentModule {}
