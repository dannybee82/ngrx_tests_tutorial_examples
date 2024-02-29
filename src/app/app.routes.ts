import { Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { LinksComponent } from './components/links/links.component';

export const routes: Routes = [
    { path: '', component: LinksComponent },
    { path: 'counter-example', component: CounterComponent }
];
