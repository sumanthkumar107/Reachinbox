import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FrameComponent2Service } from "./frameComponent2.service";
import { FrameComponent2ControllerBase } from "./base/frameComponent2.controller.base";

@swagger.ApiTags("frameComponent2s")
@common.Controller("frameComponent2s")
export class FrameComponent2Controller extends FrameComponent2ControllerBase {
  constructor(
    protected readonly service: FrameComponent2Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
