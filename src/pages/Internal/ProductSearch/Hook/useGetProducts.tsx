import { ExecutionDetailSelector, getProductDetailById } from '@shared';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';

export const useGetProducts = (uuid: string) => {
	const [detail, setDetail] = useRecoilState(ExecutionDetailSelector(uuid));

	return useQuery(
		['executionsDetail', uuid],
		() => (uuid ? (!!detail.length ? detail : getProductDetailById(uuid)) : []),
		{
			retry: false,
			onSuccess: (details) => setDetail(details)
		}
	);
};
