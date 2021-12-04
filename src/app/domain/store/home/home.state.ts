import { IKpi, IOrders, IProducts } from 'src/app/core/models/products.model';

export interface HomeState {
  kpis: IKpi[] | null;
  loadingKpis: boolean | null;
  orders: IOrders[] | null;
  loadingOrders: boolean | null;
  products: IProducts[] | null;
  loadingProducts: boolean | null;
}
