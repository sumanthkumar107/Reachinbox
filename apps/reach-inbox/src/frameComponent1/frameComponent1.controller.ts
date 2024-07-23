import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FrameComponent1Service } from "./frameComponent1.service";
import { FrameComponent1ControllerBase } from "./base/frameComponent1.controller.base";

@swagger.ApiTags("frameComponent1s")
@common.Controller("frameComponent1s")
export class FrameComponent1Controller extends FrameComponent1ControllerBase {
  constructor(
    protected readonly service: FrameComponent1Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
