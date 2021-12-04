export interface IKpi {
  id: number;
  title: string;
  value: number;
  percentage: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface IOrders {
  id: number;
  date: string;
  customer: string;
  status: string;
  total: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface IProducts {
  id: number;
  name: string;
  value: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
