import { Component, OnInit, inject } from '@angular/core';
import { BookListComponent } from '../book-list/book-list.component';
import { BookCollectionComponent } from '../book-collection/book-collection.component';
import { CommonModule } from '@angular/common';
import { selectBookCollection, selectBooks } from '../../../selectors/books.selectors';
import { BooksActions, BooksApiActions } from '../../../actions/books.actions';
import { BooksService } from '../../../services/books.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-book-overview',
  standalone: true,
  imports: [
    BookListComponent,
    BookCollectionComponent,
    CommonModule,
  ],
  templateUrl: './book-overview.component.html',
  styleUrl: './book-overview.component.scss'
})
export class BookOverviewComponent implements OnInit {

  private booksService = inject(BooksService);
  private store = inject(Store);

  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  ngOnInit() : void {
    this.booksService
    .getBooks()
    .subscribe((books) =>
      this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
    );
  }

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }

}

