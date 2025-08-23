import { Component, OnInit, inject } from '@angular/core';
import { BookListComponent } from '../book-list/book-list.component';
import { BookCollectionComponent } from '../book-collection/book-collection.component';
import { CommonModule } from '@angular/common';
import { selectBookCollection, selectBooks } from '../../../selectors/books.selectors';
import { BooksActions, BooksApiActions } from '../../../actions/books.actions';
import { BooksService } from '../../../services/books.service';
import { Store } from '@ngrx/store';
import { BackToHomeComponent } from '../../back-to-home/back-to-home.component';
import { Observable } from 'rxjs';
import { BookInterface } from '../../../interfaces/book.interface';

@Component({
  selector: 'app-book-overview',
  imports: [
    BookListComponent,
    BookCollectionComponent,
    CommonModule,
    BackToHomeComponent
  ],
  templateUrl: './book-overview.component.html',
  styleUrl: './book-overview.component.scss'
})
export class BookOverviewComponent implements OnInit {

  private booksService = inject(BooksService);
  private store = inject(Store);

  books$?: Observable<readonly BookInterface[]>;
  bookCollection$?: Observable<BookInterface[]>;

  ngOnInit() : void {
    this.booksService
    .getBooks()
    .subscribe((books) =>
      this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
    );

    this.books$ = this.store.select(selectBooks);
    this.bookCollection$ = this.store.select(selectBookCollection);
  }

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }

}