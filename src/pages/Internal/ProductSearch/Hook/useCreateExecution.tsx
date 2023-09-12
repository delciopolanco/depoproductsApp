import { Execution, createExecution } from '@shared';
import { ExecutionSelector } from '@shared/states/executions';
import { useMutation } from 'react-query';
import { useRecoilState } from 'recoil';

export const useCreateExecution = () => {
	const [executions, setExecutions] = useRecoilState(ExecutionSelector);

	return useMutation(['createExecution'], (newExecution: Execution) => {
		setExecutions([
			...executions,
			{
				...newExecution,
				isFetching: true
			} as Execution
		]);
		return createExecution(newExecution);
	});
};
