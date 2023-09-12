import { experimentalStyled } from '@mui/material';
import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './footer';
import { ExternalNavBarvBar } from './externalNavBar';

type MainLayoutProps = {
	children?: ReactNode;
};

const MainLayoutRoot = experimentalStyled('div')(({ theme }) => ({
	height: '100%',
	paddingTop: 110,
	backgroundColor: theme.palette.background.default
}));

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	return (
		<MainLayoutRoot>
			<ExternalNavBarvBar />
			{children || <Outlet />}
			<Footer />
		</MainLayoutRoot>
	);
};
