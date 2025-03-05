import { CurrencyPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IProdutos, produtos } from './produtos';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProdutosService } from '../../services/produtos.service';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [NgFor, CurrencyPipe, RouterLink],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css',
})
export class ProdutosComponent {
  //Declara a propriedade produtos, que vai amazenar a lista de produtos.
  //Ela pode ser do tipo IProdutos[](array) ou undefined.
  produtos: IProdutos[] | undefined;

  /*recebe uma instância do serviço ProdutosService e a 
 armazena na propriedade privada produtosService.
 O mesmo ocorre com route*/
  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute
  ) {}

  //chamado automaticamente quando o componente é inicializado.
  ngOnInit(): void {
    //chamado para obter a lista de produtos.
    // é armazenado na propriedade produtos.
    const produtos = this.produtosService.getAll();

    // Inscrição para monitorar mudanças nos parâmetros da URL
    this.route.queryParamMap.subscribe((params) => {
      // Obtém o valor do parâmetro 'descricao' da URL e converte para letras minúsculas
      const descricao = params.get('descricao')?.toLowerCase();

      // Verifica se há valor para o parâmetro 'descricao'
      if (descricao) {
        // Filtra a lista de produtos, retornando apenas aqueles que possuem a descrição que inclui o termo pesquisado
        this.produtos = produtos.filter((produto) =>
          produto.descricao.toLowerCase().includes(descricao)
        );

        // Retorna para evitar que o código abaixo seja executado (mantém a lista filtrada)
        return;
      }

      // Caso não haja parâmetro 'descricao', exibe todos os produtos
      this.produtos = produtos;
    });
  }
}
