import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookInterface } from '../../../interfaces/book.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {

  @Input() books: ReadonlyArray<BookInterface> = [];
  @Output() add = new EventEmitter<string>();

}
