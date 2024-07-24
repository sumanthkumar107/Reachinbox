import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FunctionBarService } from "./functionBar.service";
import { FunctionBarControllerBase } from "./base/functionBar.controller.base";

@swagger.ApiTags("functionBars")
@common.Controller("functionBars")
export class FunctionBarController extends FunctionBarControllerBase {
  constructor(
    protected readonly service: FunctionBarService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
