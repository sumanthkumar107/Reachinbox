import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FunctionBarModuleBase } from "./base/functionBar.module.base";
import { FunctionBarService } from "./functionBar.service";
import { FunctionBarController } from "./functionBar.controller";

@Module({
  imports: [FunctionBarModuleBase, forwardRef(() => AuthModule)],
  controllers: [FunctionBarController],
  providers: [FunctionBarService],
  exports: [FunctionBarService],
})
export class FunctionBarModule {}
