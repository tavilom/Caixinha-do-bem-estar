import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient as PrismaClientLootbox } from '../../prisma/generated/lootbox';

@Injectable()
export class PrismaServiceLootbox
  extends PrismaClientLootbox
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit()  { await this.$connect(); }
  async onModuleDestroy(){ await this.$disconnect(); }
}
