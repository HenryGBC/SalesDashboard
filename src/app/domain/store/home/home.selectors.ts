import { createSelector } from '@ngrx/store';
import { RootState } from '..';
import { HomeState } from './home.state';

export const selectHomeFeatureState = (state: RootState) => state.home;

export const selectIsLoadingKpis = createSelector(
  selectHomeFeatureState,
  (state: HomeState) => state.loadingKpis
);
export const selectIsLoadingOrders = createSelector(
  selectHomeFeatureState,
  (state: HomeState) => state.loadingOrders
);
export const selectIsLoadingProducts = createSelector(
  selectHomeFeatureState,
  (state: HomeState) => state.loadingProducts
);

export const selectKpis = createSelector(
  selectHomeFeatureState,
  (state: HomeState) => state.kpis
);
export const selectOrders = createSelector(
  selectHomeFeatureState,
  (state: HomeState) => state.orders
);
export const selectProducts = createSelector(
  selectHomeFeatureState,
  (state: HomeState) => state.products
);
