import { createSelector } from '@ngrx/store';
import { ItemsState } from '../../core/models/item.state';
import { AppState } from '../app.state';

export const selectItemsFeature = (state: AppState) => state.items; // la tabla

export const selectListItems = createSelector(
  selectItemsFeature,
  (state: ItemsState) => state.items // campo dentro de la tabla
);

export const selectLoading = createSelector(
  selectItemsFeature,
  (state: ItemsState) => state.loading // campo dentro de la tabla
);
