import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

//When using standalone-components/bootstrap:
//Use: provideStore().
import { StoreModule, provideStore } from '@ngrx/store';
import { counterReducer } from './reducers/counter.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    //Use: importProvidersFrom(). A global state-container (count) with it's Reducer (counterReducer) is defined here.
    importProvidersFrom( StoreModule.forRoot({ count: counterReducer }) )
  ]
};
