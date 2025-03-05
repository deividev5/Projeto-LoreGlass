import { Component, NgModule, OnInit } from '@angular/core';
import { CarrinhoService } from '../services/carrinho.service';
import { IProdutoCarrinho } from '../produtos/produtos/produtos';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [NgFor, FormsModule, NgIf, CurrencyPipe],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent implements OnInit {

  //Armazena os produtos que estão no carrinho.
  itensCarrinho: IProdutoCarrinho[] = []

  //Guarda o valor total da compra
  total= 0

  //Injeta o serviço CarrinhoService e o serviço Router para serem usados no componente.
constructor(public carrinhoService: CarrinhoService,
  public router: Router
){
}

//Quando o componente inicializar chama os metodos:
ngOnInit(): void {
// Busca os itens salvos no carrinho através do serviço.
 this.itensCarrinho = this.carrinhoService.obtemCarrinho();  
 //Atualiza o valor total da compra.
 this.calcularTotal(); 
}

//Calcula o total da compra usando o método reduce().
calcularTotal(){

  /*prev: Acumulador.
curr: Item atual da iteração.
curr.preco * curr.quantidade: Multiplica o preço pela quantidade.*/ 
  this.total = this.itensCarrinho.reduce((prev,curr) => prev + (curr.preco * curr.quantidade), 0)
}


removerProdutoCarrinho(produtoId: number){
  //Remove o produto do carrinho usando filter().
  this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
  //Chama o serviço para atualizar os itens armazenados.
  this.carrinhoService.removerProdutoCarrinho(produtoId)
  //Recalcula o total após a remoção.
  this.calcularTotal()
}

comprar(){
  //Exibe uma mensagem de sucesso.
  alert("Parabéns, sua compra foi finalizada!")
  //Limpa o carrinho.
  this.carrinhoService.limparCarrinho()
  //Redireciona o usuário para a página de produtos.
  this.router.navigate(["produtos"])

}

}
