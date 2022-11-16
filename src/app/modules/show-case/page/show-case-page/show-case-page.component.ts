import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ItemModel } from '@core/models/item.interface';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-case-page',
  templateUrl: './show-case-page.component.html',
  styleUrls: ['./show-case-page.component.scss'],
})
export class ShowCasePageComponent implements OnInit {
  listItems: ItemModel[] = [];
  listItems$: Observable<any> = new Observable();

  constructor() {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {}
}
