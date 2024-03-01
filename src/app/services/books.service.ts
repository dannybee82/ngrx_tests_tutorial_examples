import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookInterface } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private http = inject(HttpClient);

  getBooks(): Observable<BookInterface[]> {
    return this.http
      .get<{ items: BookInterface[] }>(
        'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks'
      )
      .pipe(map((books) => books.items || []));
  }

}
