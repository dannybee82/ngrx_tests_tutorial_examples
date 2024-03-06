import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PaginationAndPagerInterface, PaginationDataInterface } from '../../../interfaces/pagination-and-pager.interface';
import { setPager, setDataSource } from '../../../actions/pagination.actions';

@Component({
  selector: 'app-pager',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './pager.component.html',
  styleUrl: './pager.component.scss'
})
export class PagerComponent implements OnInit, OnDestroy {

  @Input() page: string = '';

  private _paginationData$?: Observable<PaginationDataInterface>;

  public itemsPerPage?: number;

  public options: number[] = [1, 2, 3, 4, 5, 10, 25];

  private store = inject(Store);

  ngOnInit() : void {
    //From store.
    this.store.dispatch(setDataSource({page: this.page}));
    this._paginationData$ = this.store.select('pagination');

    if(this._paginationData$ != undefined)  {
      this._paginationData$.subscribe((pagination: PaginationDataInterface) => {
        let item: PaginationAndPagerInterface | undefined = pagination.data.find(element => element.page === this.page);

        if(item != undefined && this.itemsPerPage != item.itemsPerPage) {   
          this.itemsPerPage = item.itemsPerPage;
        }
      });
    }
  }

  ngOnDestroy() : void {
    this.page = '';
    this.itemsPerPage = undefined; 
    this._paginationData$ = new Observable<PaginationDataInterface>();
  }

  changePageSize(size: string) {
    let parsed = parseInt(size);

    if(this.itemsPerPage != parsed) {
      this.itemsPerPage = parsed;

      this.store.dispatch(setPager({itemsPerPage: this.itemsPerPage, page: this.page}));      
      this.store.dispatch(setDataSource({page: this.page}));
    }    
  }

}
