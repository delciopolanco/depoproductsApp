import { deleteExecution, Execution, ExecutionSelector } from '@shared';
import { useMutation } from 'react-query';
import { useRecoilState } from 'recoil';

export const useDeleteExecution = (execution: Execution) => {
	const [executions, setExecutions] = useRecoilState(ExecutionSelector);

	return useMutation(['deleteExecutions'], () => deleteExecution(execution.uuid), {
		onSuccess: () => {
			const allExecutions = executions.filter((e) => e.uuid !== execution.uuid);
			setExecutions([...allExecutions]);
		}
	});
};
