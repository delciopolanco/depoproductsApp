import { AxiosRequestConfig } from 'axios';
import { Api } from './axios';
import { AxiosResponse } from 'axios';
import { AxiosError } from 'axios';

export const HttpService = () => {
	const extractData = (response: AxiosResponse | any) => {
		return response?.data;
	};

	const handleError = (error: AxiosError) => {
		return error?.response?.data || String(error);
	};

	const dispatcher = <T extends unknown>(request: Promise<T>) => {
		return new Promise<T>((resolve, reject) => {
			request
				.then((response) => resolve(extractData(response)))
				.catch((error) => reject(handleError(error)));
		});
	};
	const get = <T extends unknown>(httpParams: AxiosRequestConfig): Promise<T> => {
		return dispatcher(Api.get(httpParams.url as string, httpParams));
	};

	const post = <T extends unknown, V extends unknown>(
		data: V,
		httpParams: AxiosRequestConfig
	): Promise<T> => {
		return dispatcher(Api.post(httpParams.url as string, data, httpParams));
	};

	const put = <T extends unknown, V extends unknown>(
		data: V,
		httpParams: AxiosRequestConfig
	): Promise<T> => {
		return dispatcher(Api.put(httpParams.url as string, data, httpParams));
	};

	const patch = <T extends unknown, V extends unknown>(
		data: V,
		httpParams: AxiosRequestConfig
	): Promise<T> => {
		return dispatcher(Api.patch(httpParams.url as string, data, httpParams));
	};

	const del = <T extends unknown>(id: string, httpParams: AxiosRequestConfig): Promise<T> => {
		return dispatcher(Api.delete(httpParams.url as string, httpParams));
	};

	return {
		get,
		post,
		put,
		patch,
		del
	};
};
