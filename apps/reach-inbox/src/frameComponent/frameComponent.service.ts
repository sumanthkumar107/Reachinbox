import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FrameComponentServiceBase } from "./base/frameComponent.service.base";

@Injectable()
export class FrameComponentService extends FrameComponentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
