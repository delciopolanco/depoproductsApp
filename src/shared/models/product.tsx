import { WebTypes } from '..';

export interface Product {
	search: string;
	price: number;
	currency: string;
	store: string;
	description: string;
	web: string;
	uuid: string;
	id: string;
}

export interface ProductsTotals {
	minPrice: number;
	search: string;
	total: number;
	web: WebTypes;
}

export interface ProductsTotalsGroup {
	search: string;
	total: number;
	webs: ProductsTotals[];
}
