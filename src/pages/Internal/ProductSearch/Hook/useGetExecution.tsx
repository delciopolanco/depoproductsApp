import { ExecutionSelector, getExecutions } from '@shared';
import { useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';

export const useGetExecutions = () => {
	const setExecutions = useSetRecoilState(ExecutionSelector);

	return useQuery(['executions'], () => getExecutions(), {
		retry: false,
		onSuccess: (executions) => setExecutions(executions)
	});
};
