import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { MensagemModule } from './modules/lootbox/mensagem.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    PrismaModule,
    MensagemModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
