import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookInterface } from '../../../interfaces/book.interface';

@Component({
  selector: 'app-book-collection',
  standalone: true,
  imports: [],
  templateUrl: './book-collection.component.html',
  styleUrl: './book-collection.component.scss'
})
export class BookCollectionComponent {

  @Input() books: ReadonlyArray<BookInterface> = [];
  @Output() remove = new EventEmitter<string>();

}
