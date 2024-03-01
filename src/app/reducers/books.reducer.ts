import { createReducer, on } from '@ngrx/store';

import { BooksApiActions } from '../actions/books.actions';
import { BookInterface } from '../interfaces/book.interface'; 

export const initialState: ReadonlyArray<BookInterface> = [];

export const booksReducer = createReducer(
  initialState,
  on(BooksApiActions.retrievedBookList, (_state, { books }) => books)
);

