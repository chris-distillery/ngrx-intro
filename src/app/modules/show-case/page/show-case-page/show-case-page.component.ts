import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ItemModel } from '@core/models/item.interface';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { loadedItems, loadItems } from '../../../../state/actions/items.actions';
import { selectLoading } from '../../../../state/selectors/items.selectors';
import { ShowCaseService } from '../../services/show-case.service';

@Component({
  selector: 'app-show-case-page',
  templateUrl: './show-case-page.component.html',
  styleUrls: ['./show-case-page.component.scss'],
})
export class ShowCasePageComponent implements OnInit {
  loading$: Observable<boolean> = new Observable();

  constructor(private store: Store<any>, private showCaseService: ShowCaseService) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);

    this.store.dispatch(loadItems());

    this.showCaseService.getDataApi().subscribe((res: ItemModel[]) => {
      this.store.dispatch(loadedItems({items: res}));
    })
  }

  loadData(): void {}
}
