import { WebTypes } from '..';

export interface Execution {
	webs: WebTypes[];
	uuid: string;
	searchText: string;
	isFetching?: boolean;
}
