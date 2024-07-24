import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FrameComponent2ServiceBase } from "./base/frameComponent2.service.base";

@Injectable()
export class FrameComponent2Service extends FrameComponent2ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
