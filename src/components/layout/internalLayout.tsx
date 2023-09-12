import { experimentalStyled } from '@mui/material';
import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './navBar';
import { Sidebar } from './sidebar';

type InternalLayoutProps = {};

const InternalLayoutRoot = experimentalStyled('div')(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
	display: 'flex',
	height: '100%',
	overflow: 'hidden',
	width: '100%'
}));

const InternalLayoutWrapper = experimentalStyled('div')(({ theme }) => ({
	display: 'flex',
	flex: '1 1 auto',
	overflow: 'hidden',
	paddingTop: '80px',
	[theme.breakpoints.up('lg')]: {
		paddingLeft: '280px'
	}
}));

const InternalLayoutContainer = experimentalStyled('div')({
	display: 'flex',
	flex: '1 1 auto',
	overflow: 'hidden'
});

const InternalLayoutContent = experimentalStyled('div')({
	flex: '1 1 auto',
	height: '100%',
	overflow: 'auto',
	position: 'relative',
	WebkitOverflowScrolling: 'touch'
});

export const InternalLayout: FC<InternalLayoutProps> = () => {
	const [isSideBarMobileOpen, setIsSidebarMobileOpen] = useState<boolean>(false);

	return (
		<InternalLayoutRoot>
			<NavBar
				showHamburger
				onSidebarMobileOpen={() => setIsSidebarMobileOpen(!isSideBarMobileOpen)}
			/>
			<Sidebar
				onMobileClose={() => setIsSidebarMobileOpen(false)}
				openMobile={isSideBarMobileOpen}
			/>
			<InternalLayoutWrapper>
				<InternalLayoutContainer>
					<InternalLayoutContent>
						<Outlet />
					</InternalLayoutContent>
				</InternalLayoutContainer>
			</InternalLayoutWrapper>
		</InternalLayoutRoot>
	);
};
