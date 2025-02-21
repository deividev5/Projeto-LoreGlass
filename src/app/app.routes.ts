import { Routes } from '@angular/router';
import { ProdutosComponent } from './produtos/produtos/produtos.component';

export const routes: Routes = [
    {path: 'produtos', component: ProdutosComponent },
    {path: "", redirectTo: "produtos",pathMatch: 'full' }
];
