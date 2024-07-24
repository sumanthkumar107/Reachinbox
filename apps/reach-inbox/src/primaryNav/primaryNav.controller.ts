import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PrimaryNavService } from "./primaryNav.service";
import { PrimaryNavControllerBase } from "./base/primaryNav.controller.base";

@swagger.ApiTags("primaryNavs")
@common.Controller("primaryNavs")
export class PrimaryNavController extends PrimaryNavControllerBase {
  constructor(
    protected readonly service: PrimaryNavService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
