import { Injectable } from '@angular/core';
//modulo para a animação de noificação
import {MatSnackBar} from '@angular/material/snack-bar';

//para poder ser ultilizado em toda aplicação
@Injectable({
  providedIn: 'root'
})

//classe responsável pela animação de notificação
export class NotificacaoService {

  constructor(
    //injeta a dependência do MatSnackBar, podendo usar dentro da classe.
    private snackBar: MatSnackBar
  ) { }

  //metodo recebe uma mensagem como argumento para ser exibida na notificação
  notificar(mensagem: string) {

    //Abre uma notificação (Snackbar) na tela
    /*Parâmetro 1: mensagem → Define o texto principal da notificação.
      Parâmetro 2: "Ok" → Botão de ação dentro do Snackbar.*/
    this.snackBar.open(mensagem, "Ok",{

      //A notificação desaparece depois de 2 segundos 
      duration: 2000,

      //A notificação aparece no topo da tela.
      verticalPosition: 'top',

      //A notificação fica centralizada horizontalmente.
      horizontalPosition: "center"
    })
  }
}
