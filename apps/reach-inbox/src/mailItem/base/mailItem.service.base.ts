/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, MailItem as PrismaMailItem } from "@prisma/client";

export class MailItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.MailItemCountArgs, "select">): Promise<number> {
    return this.prisma.mailItem.count(args);
  }

  async mailItems(
    args: Prisma.MailItemFindManyArgs
  ): Promise<PrismaMailItem[]> {
    return this.prisma.mailItem.findMany(args);
  }
  async mailItem(
    args: Prisma.MailItemFindUniqueArgs
  ): Promise<PrismaMailItem | null> {
    return this.prisma.mailItem.findUnique(args);
  }
  async createMailItem(
    args: Prisma.MailItemCreateArgs
  ): Promise<PrismaMailItem> {
    return this.prisma.mailItem.create(args);
  }
  async updateMailItem(
    args: Prisma.MailItemUpdateArgs
  ): Promise<PrismaMailItem> {
    return this.prisma.mailItem.update(args);
  }
  async deleteMailItem(
    args: Prisma.MailItemDeleteArgs
  ): Promise<PrismaMailItem> {
    return this.prisma.mailItem.delete(args);
  }
}
