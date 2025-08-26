import { IsString } from 'class-validator';

export class CreateMensagemDto {
  @IsString()
  nome_carta: string;

  @IsString()
  id_ws: string;

}
