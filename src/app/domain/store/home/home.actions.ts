import { createAction, props } from '@ngrx/store';
import { ILogin } from 'src/app/core/models/auth.model';
import { IKpi, IOrders, IProducts } from 'src/app/core/models/products.model';

export const getKpisAction = createAction('[Home] GetKpisAction');
export const getOrdersAction = createAction('[Home] GetOrdersAction');
export const getProductsAction = createAction('[Home] GetProductsAction');
export const successKpisAction = createAction(
  '[Home]SuccessKpisAction',
  props<{ kpis: IKpi[] }>()
);
export const successOrdersAction = createAction(
  '[Home]SuccessOrdersAction',
  props<{ orders: IOrders[] }>()
);

export const successProductsAction = createAction(
  '[Home]SuccessProductsAction',
  props<{ products: IProducts[] }>()
);
