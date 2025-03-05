import { CommonModule } from '@angular/common'; // Permite o uso de diretivas como *ngIf e *ngFor
import { Component } from '@angular/core'; // Decorador para definir o componente Angular
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms'; // Ferramentas para formulários reativos
import { MatSnackBar } from '@angular/material/snack-bar'; // Serviço para exibir mensagens de alerta
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask'; // Biblioteca para aplicar máscaras nos campos de formulário

@Component({
  selector: 'app-contato', // Define a tag HTML personalizada para o componente
  standalone: true, // Permite que o componente seja usado de forma independente
  imports: [ReactiveFormsModule, CommonModule, NgxMaskDirective], // Importa módulos e diretivas necessárias
  templateUrl: './contato.component.html', // Caminho para o template HTML do componente
  providers: [provideNgxMask()], // Habilita as máscaras do ngx-mask
  styleUrl: './contato.component.css' // Caminho para os estilos CSS do componente
})
export class ContatoComponent {

  contactForm: FormGroup; // Declaração do formulário reativo

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.contactForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(5)]], // Validação do nome
      assunto: ['', [Validators.required, Validators.minLength(10)]], // Validação do assunto
      telefone: ['', [Validators.required]], // Validação do telefone
      email: ['', [Validators.required, Validators.email]], // Validação do e-mail
      mensagem: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(300)]] // Validação da mensagem
    });
  }

  // Função chamada ao submeter o formulário
  onSubmit() {
    if (this.contactForm.valid) { // Verifica se o formulário é válido
      console.log(this.contactForm.value); // Exibe os dados no console

      // Exibe mensagem de sucesso ao usuário
      this.snackBar.open('Formulário enviado com sucesso!', 'Fechar', {
        duration: 3000, // Duração da mensagem
         horizontalPosition: "center",
        panelClass: ['snackbar-success'], // Classe CSS para a mensagem de sucesso
        verticalPosition: 'top' // Exibe no topo da tela
      });

      this.contactForm.reset(); // Reseta o formulário após o envio
    } else {
      // Exibe mensagem de erro caso o formulário não seja válido
      this.snackBar.open('Preencha todos os campos corretamente!', 'Fechar', {
        duration: 3000, // Duração da mensagem
        panelClass: ['snackbar-error'], // Classe CSS para a mensagem de erro
        verticalPosition: 'top' // Exibe no topo da tela
      });
    }
  }
}
