import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../../actions/counter.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent implements OnInit {

  count$?: Observable<number>; //data-stream undefined, initialState from Reducer.

  //Ijnect the store here, 1) to dispatch Actions and 2) to select the current state of 'count'.
  private store = inject(Store<{ count: number }>);

  ngOnInit() : void {
    this.count$ = this.store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

}
