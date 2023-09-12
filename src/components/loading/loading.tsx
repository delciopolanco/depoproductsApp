import { useEffect, FC } from 'react';
import NProgress from 'nprogress';
import { Box } from '@mui/material';

export const Loading: FC = () => {
	useEffect(() => {
		NProgress.start();

		return (): void => {
			NProgress.done();
		};
	}, []);

	return (
		<Box
			sx={{
				backgroundColor: 'background.paper',
				minHeight: '100%'
			}}
		/>
	);
};
