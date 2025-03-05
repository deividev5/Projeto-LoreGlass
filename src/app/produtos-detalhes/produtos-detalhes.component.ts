import { Component } from '@angular/core';
import { IProdutoCarrinho, IProdutos} from '../produtos/produtos/produtos';
import { ProdutosService } from '../services/produtos.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import{MatSnackBarModule} from '@angular/material/snack-bar'
import { NotificacaoService } from '../services/notificacao.service';
import { CarrinhoService } from '../services/carrinho.service';


@Component({
  selector: 'app-produtos-detalhes',
  standalone: true,
  imports: [FormsModule, CurrencyPipe, MatSnackBarModule],
  templateUrl: './produtos-detalhes.component.html',
  styleUrl: './produtos-detalhes.component.css'
})
export class ProdutosDetalhesComponent {

//Armazena os detalhes do produto selecionado. Pode ser do tipo IProdutos ou undefined
produto: IProdutos | undefined

//variável com valor inicial como 1
quantidade = 1

constructor(
  //Serviço que fornece acesso aos dados dos produtos.
  private produtosService : ProdutosService,

  /*Serviço do Angular que permite acessar os parâmetros da URL
   para pegar o id do produto selecionado*/
  private route: ActivatedRoute,

  //serviço que cuida da configuração da SnackBar(Notificação)
  private notificacaoService: NotificacaoService,

  private carrinhoService: CarrinhoService
){}

ngOnInit():void{
  //Obtém os parâmetros da URL
  const routeParams = this.route.snapshot.paramMap;

  //Pega o parâmetro "id" da URL e converte para número
  const produtoId = Number(routeParams.get("id"));

  //Busca o produto pelo ID pelo serviço
  this.produto = this.produtosService.getOne(produtoId);

}

//função que é chamada quando o botão é clicado
adicionarAoCarrinho(){
  //chama o metodo "notificar" dentro do serviço NotificaçãoService e passa a mensagem 
this.notificacaoService.notificar("O produto foi adicionado ao carrinho");
const produto: IProdutoCarrinho ={
  ...this.produto!,
  quantidade: this.quantidade
}

this.carrinhoService.adicionarAoCarrinho(produto)
}
}
