import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

//importamos o route 
import { routes } from './app/app.routes';
//importamos o provideRouter
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  // e incluimos eles na configuração
  bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes)]
  });
