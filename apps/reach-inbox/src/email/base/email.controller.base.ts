/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { EmailService } from "../email.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { EmailCreateInput } from "./EmailCreateInput";
import { Email } from "./Email";
import { EmailFindManyArgs } from "./EmailFindManyArgs";
import { EmailWhereUniqueInput } from "./EmailWhereUniqueInput";
import { EmailUpdateInput } from "./EmailUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class EmailControllerBase {
  constructor(
    protected readonly service: EmailService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Email })
  @nestAccessControl.UseRoles({
    resource: "Email",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createEmail(@common.Body() data: EmailCreateInput): Promise<Email> {
    return await this.service.createEmail({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        fromName: true,
        fromEmail: true,
        toName: true,
        toEmail: true,
        cc: true,
        bcc: true,
        threadId: true,
        messageId: true,
        inReplyTo: true,
        body: true,
        isRead: true,
        folder: true,
        uid: true,
        sentAt: true,
        archivedAt: true,
        deletedAt: true,
        references: true,
        subject: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Email] })
  @ApiNestedQuery(EmailFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Email",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async emails(@common.Req() request: Request): Promise<Email[]> {
    const args = plainToClass(EmailFindManyArgs, request.query);
    return this.service.emails({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        fromName: true,
        fromEmail: true,
        toName: true,
        toEmail: true,
        cc: true,
        bcc: true,
        threadId: true,
        messageId: true,
        inReplyTo: true,
        body: true,
        isRead: true,
        folder: true,
        uid: true,
        sentAt: true,
        archivedAt: true,
        deletedAt: true,
        references: true,
        subject: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Email })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Email",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async email(
    @common.Param() params: EmailWhereUniqueInput
  ): Promise<Email | null> {
    const result = await this.service.email({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        fromName: true,
        fromEmail: true,
        toName: true,
        toEmail: true,
        cc: true,
        bcc: true,
        threadId: true,
        messageId: true,
        inReplyTo: true,
        body: true,
        isRead: true,
        folder: true,
        uid: true,
        sentAt: true,
        archivedAt: true,
        deletedAt: true,
        references: true,
        subject: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Email })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Email",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateEmail(
    @common.Param() params: EmailWhereUniqueInput,
    @common.Body() data: EmailUpdateInput
  ): Promise<Email | null> {
    try {
      return await this.service.updateEmail({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          fromName: true,
          fromEmail: true,
          toName: true,
          toEmail: true,
          cc: true,
          bcc: true,
          threadId: true,
          messageId: true,
          inReplyTo: true,
          body: true,
          isRead: true,
          folder: true,
          uid: true,
          sentAt: true,
          archivedAt: true,
          deletedAt: true,
          references: true,
          subject: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Email })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Email",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteEmail(
    @common.Param() params: EmailWhereUniqueInput
  ): Promise<Email | null> {
    try {
      return await this.service.deleteEmail({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          fromName: true,
          fromEmail: true,
          toName: true,
          toEmail: true,
          cc: true,
          bcc: true,
          threadId: true,
          messageId: true,
          inReplyTo: true,
          body: true,
          isRead: true,
          folder: true,
          uid: true,
          sentAt: true,
          archivedAt: true,
          deletedAt: true,
          references: true,
          subject: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/onebox/messages/:thread_id")
  @swagger.ApiOkResponse({
    type: Email,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async GetEmailsByThreadId(
    @common.Body()
    body: number
  ): Promise<Email[]> {
    return this.service.GetEmailsByThreadId(body);
  }
}