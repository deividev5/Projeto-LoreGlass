// Importação dos módulos necessários para o componente
import { Component } from '@angular/core'; // Permite a criação de componentes Angular
import { FormsModule } from '@angular/forms'; // Permite o uso de Two-Way Data Binding com [(ngModel)]
import { Router } from '@angular/router'; // Serviço para realizar navegação entre rotas

@Component({
  selector: 'app-barra-pesquisa', 
  standalone: true,
  imports: [FormsModule], // Importa o módulo de formulários para o Two-Way Data Binding
  templateUrl: './barra-pesquisa.component.html', 
  styleUrl: './barra-pesquisa.component.css', 
})
export class BarraPesquisaComponent {
  // Propriedade para armazenar o valor da descrição digitada pelo usuário
  descricao = '';

  // Injeta o serviço de roteamento para navegação entre rotas
  constructor(private router: Router) {}

  // Método chamado ao submeter o formulário para realizar a pesquisa
  pesquisar() {
    // Verifica se a descrição não está vazia
    if (this.descricao) {
      // Navega para a rota "produtos" com o parâmetro da descrição como query param
      this.router.navigate(['produtos'], {
        queryParams: { descricao: this.descricao },
      });
    } else {
      // Navega para a rota "produtos" sem parâmetros se o campo estiver vazio
      this.router.navigate(['produtos']);
    }

    // Exibe no console o valor digitado para fins de depuração
    console.log(this.descricao);
  }
}
