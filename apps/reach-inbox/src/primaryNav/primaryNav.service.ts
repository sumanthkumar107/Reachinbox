import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PrimaryNavServiceBase } from "./base/primaryNav.service.base";

@Injectable()
export class PrimaryNavService extends PrimaryNavServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
