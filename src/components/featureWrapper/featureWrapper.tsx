import { Card, CardProps, useTheme } from '@mui/material';
import { FC, ReactNode } from 'react';

type PropsFeatureWrapper = CardProps & {
	children: ReactNode;
};

export const FeatureWrapper: FC<PropsFeatureWrapper> = ({ children, ...other }) => {
	const theme = useTheme();
	return (
		<Card
			sx={{
				border: `1px solid ${theme.palette.primary.main}`,
				my: 2,
				p: {
					md: 2,
					xs: 1.2
				}
			}}
			{...other}
		>
			{children}
		</Card>
	);
};
