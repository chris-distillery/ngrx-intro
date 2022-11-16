import { createReducer, on } from '@ngrx/store';
import { ItemModel } from '../../core/models/item.interface';
import { loadedItems, loadItems } from '../actions/items.actions';

export const initialState: {
  loading: boolean;
  items: ReadonlyArray<ItemModel>;
} = {
  loading: false,
  items: [],
};

export const itemsReducer = createReducer(
  initialState,
  on(loadItems, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedItems, (state) => state)
);
