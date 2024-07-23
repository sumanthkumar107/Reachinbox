import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FrameComponentService } from "./frameComponent.service";
import { FrameComponentControllerBase } from "./base/frameComponent.controller.base";

@swagger.ApiTags("frameComponents")
@common.Controller("frameComponents")
export class FrameComponentController extends FrameComponentControllerBase {
  constructor(
    protected readonly service: FrameComponentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
