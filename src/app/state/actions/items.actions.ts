import { createAction, props } from '@ngrx/store';
import { ItemModel } from '../../core/models/item.interface';

export const loadItems = createAction(
  '[Item List] Load items',
);

export const loadedItems = createAction(
  '[Item List] Loaded success',
  props<{ items: ItemModel[] }>()
);
