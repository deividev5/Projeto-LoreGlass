import { Component } from '@angular/core';
import { CarrinhoService } from '../services/carrinho.service';
import { BarraPesquisaComponent } from '../barra-pesquisa/barra-pesquisa.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BarraPesquisaComponent, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})


export class HeaderComponent {

//Injeta o serviço CarrinhoService no componente
//O public permite que o carrinhoService estará disponível para o restante da classe HeaderComponent
constructor(public carrinhoService: CarrinhoService){

}


}
