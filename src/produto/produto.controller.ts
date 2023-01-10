import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';
import { CriaProdutoDTO } from './dto/CriaProduto.dto';

@Controller('/produtos')
export class ProdutoController {
  constructor(private produtoRepository: ProdutoRepository) {}

  @Post()
  async criaProduto(@Body() dadosProduto: CriaProdutoDTO) {
    this.produtoRepository.cria(dadosProduto);
    return dadosProduto;
  }

  @Get()
  async listaProdutos() {
    return this.produtoRepository.lista();
  }
}
