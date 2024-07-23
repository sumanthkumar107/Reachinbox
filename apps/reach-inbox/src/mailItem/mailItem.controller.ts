import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MailItemService } from "./mailItem.service";
import { MailItemControllerBase } from "./base/mailItem.controller.base";

@swagger.ApiTags("mailItems")
@common.Controller("mailItems")
export class MailItemController extends MailItemControllerBase {
  constructor(
    protected readonly service: MailItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
