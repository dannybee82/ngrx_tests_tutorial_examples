import { createActionGroup, props } from '@ngrx/store';
import { BookInterface } from '../interfaces/book.interface';

export const BooksActions = createActionGroup({
  source: 'Books',
  events: {
    //props<>() = defines all other meta-data to describe the Action.
    'Add Book': props<{ bookId: string }>(),
    'Remove Book': props<{ bookId: string }>(),
  },
});

export const BooksApiActions = createActionGroup({
  source: 'Books API',
  events: {
    //props<>() = defines all other meta-data to describe the Action.
    'Retrieved Book List': props<{ books: ReadonlyArray<BookInterface> }>(),
  },
});