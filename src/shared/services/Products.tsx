import { API_URLS, Product, ProductsTotals } from '@shared';
import { HttpService } from './service';

export const getProductsTotalByUuid = (uuid: string): Promise<ProductsTotals[]> => {
	if (!uuid) {
		return new Promise(() => {});
	}
	return HttpService().get({
		url: `${API_URLS.products}/totals/${uuid}`
	});
};

export const getProductDetailById = (uuid: string): Promise<Product[]> => {
	if (!uuid) {
		return new Promise(() => {});
	}
	return HttpService().get({
		url: `${API_URLS.products}/${uuid}`
	});
};
