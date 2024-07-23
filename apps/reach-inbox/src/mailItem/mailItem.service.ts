import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MailItemServiceBase } from "./base/mailItem.service.base";

@Injectable()
export class MailItemService extends MailItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
