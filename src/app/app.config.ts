import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';

//When using standalone-components/bootstrap:
//Use: provideStore().
import { StoreModule, provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './reducers/counter.reducer';
import { booksReducer } from './reducers/books.reducer';
import { collectionReducer } from './reducers/collection.reducer';
import { evenOrOddReducer } from './reducers/even-or-odd.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideAnimations(),
    provideStore(),
    //Use: importProvidersFrom(). A global state-container (count) with it's Reducer (counterReducer) is defined here.
    //importProvidersFrom( StoreModule.forRoot({ count: counterReducer }) ),
    //importProvidersFrom( StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }) )
    
    //When working with standalone-bootstrap/components, the lines below can be used:
    provideState({ name: 'count', reducer: counterReducer }),
    provideState({ name: 'books', reducer: booksReducer }),
    provideState({ name: 'collection', reducer: collectionReducer }),
    provideState({ name: 'evenOdd', reducer: evenOrOddReducer }),
  ]
};
