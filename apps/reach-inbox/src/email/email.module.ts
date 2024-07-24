import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EmailModuleBase } from "./base/email.module.base";
import { EmailService } from "./email.service";
import { EmailController } from "./email.controller";

@Module({
  imports: [EmailModuleBase, forwardRef(() => AuthModule)],
  controllers: [EmailController],
  providers: [EmailService],
  exports: [EmailService],
})
export class EmailModule {}
