import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FrameComponent1ServiceBase } from "./base/frameComponent1.service.base";

@Injectable()
export class FrameComponent1Service extends FrameComponent1ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
