import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CardModuleBase } from "./base/card.module.base";
import { CardService } from "./card.service";
import { CardController } from "./card.controller";

@Module({
  imports: [CardModuleBase, forwardRef(() => AuthModule)],
  controllers: [CardController],
  providers: [CardService],
  exports: [CardService],
})
export class CardModule {}
