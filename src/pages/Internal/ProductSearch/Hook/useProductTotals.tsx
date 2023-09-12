import { Execution, ProductsTotals, ProductsTotalsGroup, getProductsTotalByUuid } from '@shared';
import { ExecutionSelector } from '@shared/states/executions';
import { orderBy, sumBy } from 'lodash';
import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useRecoilState } from 'recoil';

export interface useProductTotalsProps {
	isFetching: boolean;
	isSuccess: boolean;
	totals: ProductsTotalsGroup;
}

export const useProductTotals = (execute: Execution): useProductTotalsProps => {
	const [totals, setTotalsGroup] = useState({} as ProductsTotalsGroup);
	const [executions, setExecutions] = useRecoilState(ExecutionSelector);
	const [refetchInterval, setRefetchInterval] = useState(10000);

	const queryClient = useQueryClient();

	const { isFetching, isSuccess } = useQuery(
		['productsTotals', execute.uuid],
		() => getProductsTotalByUuid(execute.uuid),
		{
			refetchInterval: () => (!execute.isFetching ? false : refetchInterval),
			onSuccess: (totals: ProductsTotals[]) => {
				if (!totals.length) return;

				if (execute.isFetching) {
					// Update
					const allExecutions = executions.filter((e) => e.uuid !== execute.uuid);
					setExecutions([...allExecutions, { ...execute, isFetching: false }]);
				}

				const total = sumBy(totals as any, 'total');

				setTotalsGroup({
					total,
					search: totals[0].search,
					webs: orderBy(totals, ['web'], ['asc'])
				} as ProductsTotalsGroup);
			},
			onError: () => setRefetchInterval(0)
		}
	);

	return {
		isSuccess,
		isFetching,
		totals
	};
};
