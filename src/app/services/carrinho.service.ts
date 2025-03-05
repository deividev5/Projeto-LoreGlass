import { Injectable } from '@angular/core';

//É uma interface que define a estrutura de dados de um produto no carrinho
import { IProdutoCarrinho } from '../produtos/produtos/produtos';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  //Declara um array de produtos (itens) que representa o carrinho de compras.
  // Inicialmente, o carrinho está vazio.
  itens: IProdutoCarrinho[] = [];

  constructor() {}

  //Esse método verifica se o código está sendo executado no navegador.
  private isBrowser() {
    return typeof window !== 'undefined';
  }

  //Esse método busca os itens do carrinho armazenados no localStorage
  obtemCarrinho() {
    //verifica se está no navegador usando o método isBrowser()
    if (this.isBrowser()) {
      //tenta obter o carrinho com localStorage.getItem("carrinho")
      //O JSON.parse() converte o valor armazenado de volta para um array de objetos.
      //se não tiver nada ele retorna um array vazio
      this.itens = JSON.parse(localStorage.getItem('carrinho') || '[]');

      //retorna a resposta
      return this.itens;
    }

    //Se não estiver no navegador (por exemplo, no servidor), retorna um array vazio ([]).
    return [];
  }

  //Esse método adiciona um produto ao carrinho
  adicionarAoCarrinho(produto: IProdutoCarrinho) {
    //verifica se o código está no navegador com isBrowser()
    if (this.isBrowser()) {
      //Adiciona o produto ao array itens
      this.itens.push(produto);

      //salva o array de itens no localStorage
      //JSON.stringify() converte o array de objetos para uma string antes de armazená-lo
      localStorage.setItem('carrinho', JSON.stringify(this.itens));
    }
  }

  removerProdutoCarrinho(produtoId: number){
    //Filtra a lista removendo o produto pelo id.
    this.itens = this.itens.filter(item => item.id !== produtoId)
    //Atualiza a lista no localStorage.
    localStorage.setItem('carrinho', JSON.stringify(this.itens));
  }

  limparCarrinho() {
    //Verifica se está no navegador
    if (this.isBrowser()) {
      //impa o array itens e o armazena como um array vazio no localStorage
      this.itens = [];
      localStorage.clear();
    }
  }
}
