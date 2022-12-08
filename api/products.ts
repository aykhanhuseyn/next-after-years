import { ProductsResponse, Product } from 'models';
import { api } from './axios';

export const getProducts = () => api.get<ProductsResponse>('products');

export const getProductById = (id: string) =>
	api.get<Product>(`products/${id}`);
