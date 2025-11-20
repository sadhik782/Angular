import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

import { provideStore } from '@ngrx/store';
import { foodReducer } from './app/store/food.reducer';

const bootstrap = (context: BootstrapContext) =>
  bootstrapApplication(AppComponent, {
    providers: [
      ...appConfig.providers,
      provideStore({
        food: foodReducer
      })
    ]
  }, context);

export default bootstrap;

