import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

//When using standalone-components/bootstrap:
//Use: provideStore().
import { StoreModule, provideStore } from '@ngrx/store';
import { counterReducer } from './reducers/counter.reducer';
import { booksReducer } from './reducers/books.reducer';
import { collectionReducer } from './reducers/collection.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideStore(),
    //Use: importProvidersFrom(). A global state-container (count) with it's Reducer (counterReducer) is defined here.
    importProvidersFrom( StoreModule.forRoot({ count: counterReducer }) ),
    importProvidersFrom( StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }) )
  ]
};
