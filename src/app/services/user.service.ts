import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/user.interface';
import { Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users: UserInterface[] = [
    { id: '1', name: 'Saskia', age: 24 },
    { id: '2', name: 'Matilda', age: 27 },
    { id: '3', name: 'Victoria', age: 29 },
  ];

  constructor() { }

  getAllUsers() : Observable<UserInterface[]> {
    return new Observable<UserInterface[]>(observer => {
      observer.next(this._users);
      observer.complete();
    })
    .pipe(delay(3500));
  }

}
