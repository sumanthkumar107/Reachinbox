import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { EmailModule } from "./email/email.module";
import { CardModule } from "./card/card.module";
import { FrameComponent2Module } from "./frameComponent2/frameComponent2.module";
import { FrameComponent1Module } from "./frameComponent1/frameComponent1.module";
import { PrimaryNavModule } from "./primaryNav/primaryNav.module";
import { FunctionBarModule } from "./functionBar/functionBar.module";
import { FrameComponentModule } from "./frameComponent/frameComponent.module";
import { MailItemModule } from "./mailItem/mailItem.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule } from "@nestjs/config";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    EmailModule,
    CardModule,
    FrameComponent2Module,
    FrameComponent1Module,
    PrimaryNavModule,
    FunctionBarModule,
    FrameComponentModule,
    MailItemModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
  ],
  providers: [],
})
export class AppModule {}
