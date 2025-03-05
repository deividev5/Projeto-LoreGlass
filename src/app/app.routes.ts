import {Routes} from '@angular/router';
import { ProdutosComponent } from './produtos/produtos/produtos.component';
import { Pagina404Component } from './pagina-404/pagina-404.component';
import { ProdutosDetalhesComponent } from './produtos-detalhes/produtos-detalhes.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ContatoComponent } from './contato/contato.component';

export const routes: Routes = [
    {path: 'produtos', component: ProdutosComponent,},
    {path: 'produtos/:id', component: ProdutosDetalhesComponent},
    {path: 'carrinho', component: CarrinhoComponent},
    {path: 'contato' , component: ContatoComponent},
    {path: "", redirectTo: "produtos",pathMatch: 'full' },
    {path: "**", component: Pagina404Component},
   
];
