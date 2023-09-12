import { Execution } from '@shared';
import { ExecutionSelector } from '@shared/states/executions';
import { useRecoilValue } from 'recoil';

export interface useProductSearchProps {
	executions: Execution[];
}

export const useExecutions = (): useProductSearchProps => {
	const executions = useRecoilValue(ExecutionSelector);

	return {
		executions
	};
};
