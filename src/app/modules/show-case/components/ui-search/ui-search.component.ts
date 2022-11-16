import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-search',
  templateUrl: './ui-search.component.html',
  styleUrls: ['./ui-search.component.scss'],
})
export class UiSearchComponent implements OnInit {
  src: string = '';

  constructor() {}

  ngOnInit(): void {}

  search(src: any): void {}
}
