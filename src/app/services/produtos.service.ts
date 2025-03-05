import { Injectable } from '@angular/core';

//lista de produtos //interface IProdutos, que define a estrutura dos objetos dentro do array
import { produtos, IProdutos } from '../produtos/produtos/produtos';

// serviço estará disponível em toda a aplicação
@Injectable({
  providedIn: 'root'
})

//classe responsável pelo gerenciamento dos produtos
export class ProdutosService {

 //Declara e a inicializa com os dados importados de produtos
produtos: IProdutos[] = produtos;

  constructor() { }

  //Retorna a lista completa de produtos.
  getAll(){
    return this.produtos
  }

  //busca um produto no array produtos cujo id seja igual ao produtoId.
  //Retorna o primeiro produto encontrado ou undefined
  getOne(produtoId: number){
    return this.produtos.find(produto => produto.id === produtoId)
  }

}


