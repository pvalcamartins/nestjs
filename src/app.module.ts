import { Module } from '@nestjs/common';
import { usuarioModule } from './usuario/usuario.module';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [usuarioModule, ProdutoModule],
})
export class AppModule {}
