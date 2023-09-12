import {
	AppBar,
	Avatar,
	Badge,
	Box,
	ButtonBase,
	IconButton,
	styled,
	Toolbar,
	Typography,
	useTheme
} from '@mui/material';
import { FC, ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Logo } from './logo';
import MenuIcon from '@mui/icons-material/Menu';
import { AuthSelector, getInitials, PATHS } from '@shared';
import { useRecoilValue } from 'recoil';
import { isEmpty } from 'lodash/fp';

type NavBarProps = {
	children?: ReactNode;
	onSideBarOpen?: boolean;
	showHamburger?: boolean;
	onSidebarMobileOpen?: () => void;
};

const StyledBadge = styled(Badge)(({ theme }) => ({
	'& .MuiBadge-badge': {
		backgroundColor: '#44b700',
		color: '#44b700',
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
		'&::after': {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			borderRadius: '50%',
			animation: 'ripple 1.2s infinite ease-in-out',
			border: '1px solid currentColor',
			content: '""'
		}
	},
	'@keyframes ripple': {
		'0%': {
			transform: 'scale(.8)',
			opacity: 1
		},
		'100%': {
			transform: 'scale(2.4)',
			opacity: 0
		}
	}
}));

const ToolbarRoot = styled(Toolbar)(({ theme }) => ({
	display: 'grid',
	justifyItems: 'end',
	gridTemplateColumns: 'min-content 1fr',
	alignContent: 'center'
}));

export const NavBar: FC<NavBarProps> = ({ showHamburger, onSidebarMobileOpen }) => {
	const theme = useTheme();
	const auth = useRecoilValue(AuthSelector);

	return (
		<AppBar elevation={0} sx={{ background: theme.palette.common.white, color: 'text.secondary' }}>
			<ToolbarRoot variant="dense" sx={{ minHeight: 86 }}>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: 'min-content min-content'
					}}
				>
					{showHamburger && (
						<IconButton
							color={'inherit'}
							onClick={onSidebarMobileOpen}
							sx={{ display: { lg: 'none' }, mr: 2 }}
						>
							<MenuIcon fontSize={'medium'} sx={{ color: theme.palette.primary.main }} />
						</IconButton>
					)}
					<Box sx={{ width: '150px', display: { md: 'inline', xs: 'none' } }}>
						<RouterLink to={PATHS.search}>
							<Logo
								sx={{
									display: 'inline',
									'& img': {
										maxWidth: '100%'
									}
								}}
							/>
						</RouterLink>
					</Box>
				</Box>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: '1fr min-content',
						justifyContent: 'space-around',
						justifyItems: 'center',
						gap: '0.5rem;'
					}}
				>
					<Box textAlign={'right'} color={'primary.main'}>
						<Typography variant="body1">{auth.user?.name}</Typography>
						<Typography variant="body2">{auth.user?.jobRole}</Typography>
					</Box>
					<Box component={ButtonBase} sx={{ alignItems: 'center', display: 'flex' }}>
						<StyledBadge
							overlap="circular"
							anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
							variant="dot"
						>
							<Avatar
								sx={{
									height: 42,
									width: 42,
									backgroundColor: 'primary.main',
									color: 'primary.contrastText'
								}}
							>
								{auth && !isEmpty(auth.user) && getInitials(auth.user.name)}
							</Avatar>
						</StyledBadge>
					</Box>
				</Box>
			</ToolbarRoot>
		</AppBar>
	);
};
