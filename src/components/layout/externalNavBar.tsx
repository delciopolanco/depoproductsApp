import { AppBar, Box, Toolbar, useTheme } from '@mui/material';
import { FC, ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Logo } from './logo';
type NavBarProps = {
	children?: ReactNode;
};

export const ExternalNavBarvBar: FC<NavBarProps> = ({ children }) => {
	const theme = useTheme();

	return (
		<AppBar elevation={0} sx={{ background: theme.palette.common.white, color: 'text.secondary' }}>
			<Toolbar variant="dense" sx={{ minHeight: 80 }}>
				<RouterLink to={'/'} style={{ width: 150 }}>
					<Logo
						sx={{
							display: 'inline',
							'& img': {
								maxWidth: '100%'
							}
						}}
					/>
				</RouterLink>
				<Box sx={{ flexGrow: 1, ml: 2 }}></Box>
				{children}
			</Toolbar>
		</AppBar>
	);
};
