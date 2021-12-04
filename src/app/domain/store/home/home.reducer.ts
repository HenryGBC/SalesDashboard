import { createReducer, on, Action } from '@ngrx/store';
import * as homeActions from './home.actions';
import { HomeState } from './home.state';

export const initialHomeState: HomeState = {
  kpis: null,
  loadingKpis: true,
  orders: null,
  loadingOrders: true,
  products: null,
  loadingProducts: true,
};

const homeReducerInternal = createReducer(
  initialHomeState,
  on(homeActions.successKpisAction, (state, { kpis }) => {
    return {
      ...state,
      loadingKpis: false,
      kpis,
    };
  }),
  on(homeActions.successOrdersAction, (state, { orders }) => {
    return {
      ...state,
      loadingOrders: false,
      orders,
    };
  }),
  on(homeActions.successProductsAction, (state, { products }) => {
    return {
      ...state,
      loadingKpis: false,
      products,
    };
  })
);
export function homeReducer(state: HomeState | undefined, action: Action) {
  return homeReducerInternal(state, action);
}
