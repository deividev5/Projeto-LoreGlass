import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';  // Importando o RouterModule
import { ProdutosComponent } from './produtos/produtos.component';



// Definindo as rotas para este módulo
const produtoRoutes: Routes = [
  { path: '/produtos', component: ProdutosComponent }  // A rota padrão para este módulo será o ProdutoListComponent
];

@NgModule({
  declarations: [
    ProdutosComponent  // Registrando o componente
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(produtoRoutes)  // Configurando o roteamento para este módulo
  ],
  exports: [
    ProdutosComponent  // Exportando o componente para ser usado em outros módulos
  ]
})
export class ProdutosModule { }
