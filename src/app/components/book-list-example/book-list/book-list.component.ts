import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookInterface } from '../../../interfaces/book.interface';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {

  @Input() books: ReadonlyArray<BookInterface> = [];
  @Output() add = new EventEmitter<string>();

}
