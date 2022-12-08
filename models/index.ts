type URLString = string;

export interface ProductItem {
	id: number;
	title: string;
	description: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	brand: string;
	category: string;
	thumbnail: URLString;
	images: URLString[];
}

export interface ListResponseBase {
	total: number;
	skip: number;
	limit: number;
}

export interface ProductsResponse extends ListResponseBase {
	products: ProductItem[];
}

export interface Product {
	brand: string;
	category: string;
	description: string;
	discountPercentage: number;
	id: number;
	images: URLString[];
	price: number;
	rating: number;
	stock: number;
	thumbnail: URLString;
	title: string;
}
