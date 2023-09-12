import { API_URLS, Execution } from '..';
import { HttpService } from './service';

export const getExecutions = (): Promise<Execution[]> => {
	return HttpService().get({
		url: API_URLS.execute
	});
};

export const deleteExecution = (uuid: string): Promise<void> => {
	return HttpService().del(uuid, {
		url: `${API_URLS.execute}/${uuid}`
	});
};

export const createExecution = (execution: Execution): Promise<void> => {
	return HttpService().post(execution, {
		url: `${API_URLS.execute}`
	});
};
