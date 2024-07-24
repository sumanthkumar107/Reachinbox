import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PrimaryNavModuleBase } from "./base/primaryNav.module.base";
import { PrimaryNavService } from "./primaryNav.service";
import { PrimaryNavController } from "./primaryNav.controller";

@Module({
  imports: [PrimaryNavModuleBase, forwardRef(() => AuthModule)],
  controllers: [PrimaryNavController],
  providers: [PrimaryNavService],
  exports: [PrimaryNavService],
})
export class PrimaryNavModule {}
