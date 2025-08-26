import { Injectable } from '@nestjs/common';
import { PrismaServiceLootbox} from 'src/prisma/prisma.service';
import { CreateMensagemDto } from './dto/create-mensagem.dto';


@Injectable()
export class MensagemService {
  constructor(private prismaServiceControle: PrismaServiceLootbox) {}

  async create(data: CreateMensagemDto) {
    return this.prismaServiceControle.mensagem.create({
      data: {
        nome_carta: data.nome_carta,
        id_ws: data.id_ws,
      },
    });
  }

  async findAll() {
    return this.prismaServiceControle.mensagem.findMany({});
  }
}