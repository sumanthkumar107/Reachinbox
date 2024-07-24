import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MailItemModuleBase } from "./base/mailItem.module.base";
import { MailItemService } from "./mailItem.service";
import { MailItemController } from "./mailItem.controller";

@Module({
  imports: [MailItemModuleBase, forwardRef(() => AuthModule)],
  controllers: [MailItemController],
  providers: [MailItemService],
  exports: [MailItemService],
})
export class MailItemModule {}
