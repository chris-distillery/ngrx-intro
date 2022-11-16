import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ItemModel } from '@core/models/item.interface';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { loadItems } from '../../../../state/actions/items.actions';

@Component({
  selector: 'app-show-case-page',
  templateUrl: './show-case-page.component.html',
  styleUrls: ['./show-case-page.component.scss'],
})
export class ShowCasePageComponent implements OnInit {
  listItems: ItemModel[] = [];
  listItems$: Observable<any> = new Observable();

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch(loadItems());
  }

  loadData(): void {}
}
