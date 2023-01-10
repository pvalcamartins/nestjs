import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutoRepository {
  private produtos = [];

  async cria(produto) {
    this.produtos.push(produto);
    console.log(this.produtos);
  }

  async lista() {
    return this.produtos;
  }
}
