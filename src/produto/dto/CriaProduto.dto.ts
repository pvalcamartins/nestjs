import { IsNotEmpty } from 'class-validator';

export class CriaProdutoDTO {
  @IsNotEmpty({ message: 'O nome do produto é obrigatório' })
  produto: string;
  @IsNotEmpty({ message: 'O preço é obrigatório' })
  preco: string;
  @IsNotEmpty({ message: 'A descrição é obrigatório' })
  descricao: string;
}
