import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { PaginationDataInterface, PaginationAndPagerInterface } from '../../../interfaces/pagination-and-pager.interface';
import { Store } from '@ngrx/store';
import { setCurrentPage, setDataSource } from '../../../actions/pagination.actions';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {

  @Input() page: string = '';

  private _paginationData$?: Observable<PaginationDataInterface>;

  public amountOfPages: number = 0;

  private _currentPageindex: number = 0;

  private store = inject(Store);

  ngOnInit(): void {
    //From store.
    this._paginationData$ = this.store.select('pagination');

    if(this._paginationData$ != undefined)  {
      this._paginationData$.subscribe((pagination: PaginationDataInterface) => {
        let item: PaginationAndPagerInterface | undefined = pagination.data.find(element => element.page === this.page);

        if(item != undefined && this.amountOfPages != item.totalPages) {
          this.amountOfPages = item.totalPages;
          this._currentPageindex = item.currentPage;
        }

        if(item != undefined && this._currentPageindex != item.currentPage) {
          this._currentPageindex = item.currentPage;
        }
      });
    }
  }

  getPagination() : string[] {
    let start: number = 0;
    let end: number = 0;

    if(this._currentPageindex - 1 <= 0) {
      start = 1;      
    } else {
      start = this._currentPageindex - 1;
    }

    if(this._currentPageindex + 1 < this.amountOfPages) {
      end = this._currentPageindex + 1;
    } else {
      end = this.amountOfPages;
    }

    let arr: string[] = [];
   
    for(let i = start; i <= end; i++) {
      arr.push(i + "");
    }

    return arr;
  }

  isCurrentPageIndex(value: string) : boolean {
    let parsed: number = parseInt(value);
    return (parsed == this._currentPageindex) ? true : false;
  }

  setPageIndex(value: string) : void {
    let parsed: number = parseInt(value);
    this._currentPageindex = parsed;
    this.store.dispatch(setCurrentPage({currentPage: this._currentPageindex, totalPages: this.amountOfPages, page: this.page}));
    this.store.dispatch(setDataSource({page: this.page}));
  }

  previousPage() : void {
    if(this._currentPageindex - 1 > 0) {
      this._currentPageindex -= 1;
      this.store.dispatch(setCurrentPage({currentPage: this._currentPageindex, totalPages: this.amountOfPages, page: this.page}));
      this.store.dispatch(setDataSource({page: this.page}));
    }
  }

  nextPage() : void {
    if(this._currentPageindex + 1 <= this.amountOfPages) {
      this._currentPageindex += 1;
      this.store.dispatch(setCurrentPage({currentPage: this._currentPageindex, totalPages: this.amountOfPages, page: this.page}));
      this.store.dispatch(setDataSource({page: this.page}));
    }
  }

}
