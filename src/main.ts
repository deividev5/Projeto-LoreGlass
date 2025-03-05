import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

//Importa módulos de bibliotecas  para serem usados globalmente sem precisar de um NgModule
import { importProvidersFrom } from '@angular/core';

// Importa as animações necessárias para componentes do Angular Material.
import { provideAnimations } from '@angular/platform-browser/animations';

//Habilita animações do Angular Material, que são necessárias para alguns componentes.
import { MatSnackBarModule } from '@angular/material/snack-bar';

//importamos o route 
import { routes } from './app/app.routes';

//importamos o provideRouter
import { provideRouter } from '@angular/router';




// para iniciar a aplicação.
bootstrapApplication(AppComponent, {
  ...appConfig, // Usa a configuração central

  providers: [
    ...(appConfig.providers || []), // Mantém os providers que já estavam no appConfig
    provideRouter(routes), //suporte das rotas
  

    //modulos de animações
    provideAnimations(),
    importProvidersFrom(MatSnackBarModule)
  ]
  //Captura erros durante a inicialização.
}).catch((err) => console.error(err));
 