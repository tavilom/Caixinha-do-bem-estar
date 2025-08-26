import { Module } from '@nestjs/common';
import { PrismaServiceLootbox} from './prisma.service';

@Module({
  providers: [PrismaServiceLootbox],
  exports: [PrismaServiceLootbox]
})
export class PrismaModule {}
