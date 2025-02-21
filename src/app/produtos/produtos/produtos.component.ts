import { CurrencyPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IProdutos, produtos } from './produtos';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [NgFor, CurrencyPipe,RouterLink],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
produtos: IProdutos[] = produtos;
}
