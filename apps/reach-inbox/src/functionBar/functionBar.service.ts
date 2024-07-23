import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FunctionBarServiceBase } from "./base/functionBar.service.base";

@Injectable()
export class FunctionBarService extends FunctionBarServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
