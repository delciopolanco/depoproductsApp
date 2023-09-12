import { Auth, AuthSelector, PATHS } from '@shared';
import { useEffect, FC } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { useTranslation } from 'react-i18next';
import { Box, Divider, Drawer, Theme, useMediaQuery, useTheme } from '@mui/material';
import { Button, Logo, Scrollbar } from '@components';
import { NavSection } from './navSection';
import { Logoff } from '@icons';
import { useRecoilState } from 'recoil';

interface SidebarProps {
	onMobileClose: () => void;
	openMobile: boolean;
}

export const Sidebar: FC<SidebarProps> = (props) => {
	const { onMobileClose, openMobile } = props;
	const location = useLocation();
	const theme = useTheme();
	const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
	const { t } = useTranslation();
	const [_, setAuth] = useRecoilState(AuthSelector);

	const handleCloseSession = () => {
		setAuth({} as Auth);
	};

	const closeSessionButton = () => {
		return (
			<Button
				sx={{ mb: 5 }}
				startIcon={<Logoff fontSize={'small'} />}
				variant={'text'}
				size={'large'}
				onClick={handleCloseSession}
			>
				{t('closeSession')}
			</Button>
		);
	};

	const sections = [
		{
			title: t('searchList'),
			items: [
				{
					title: t('theSearch'),
					path: PATHS.search,
					icon: <TravelExploreIcon fontSize={'small'} />
				}
			]
		}
	];

	useEffect(() => {
		if (openMobile && onMobileClose) {
			onMobileClose();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location.pathname]);

	const content = (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				height: '100%'
			}}
		>
			<Scrollbar options={{ suppressScrollX: true }}>
				<Box
					sx={{
						backgroundColor: theme.palette.common.white,
						display: {
							lg: 'none',
							xs: 'flex'
						},
						justifyContent: 'center',
						p: 1
					}}
				>
					<RouterLink to={'/'}>
						<Logo
							sx={{
								justifyContent: 'left',
								'& img': {
									maxWidth: '60%'
								}
							}}
						/>
					</RouterLink>
				</Box>
				<Divider />
				<Box sx={{ p: 2 }}>
					{sections.map((section) => (
						<NavSection
							key={section.title}
							pathname={location.pathname}
							sx={{
								'& + &': {
									mt: 3
								}
							}}
							{...section}
						/>
					))}
				</Box>
			</Scrollbar>
		</Box>
	);

	if (lgUp) {
		return (
			<Drawer
				anchor={'left'}
				open
				PaperProps={{
					sx: {
						backgroundColor: 'background.paper',
						height: 'calc(100% - 80px) !important',
						top: '86px !important',
						width: 280
					}
				}}
				variant={'permanent'}
			>
				{content}
				{closeSessionButton()}
			</Drawer>
		);
	}

	return (
		<Drawer
			anchor={'left'}
			onClose={onMobileClose}
			open={openMobile}
			PaperProps={{
				sx: {
					backgroundColor: 'background.paper',
					width: 280
				}
			}}
			variant={'temporary'}
		>
			{content}
			{closeSessionButton()}
		</Drawer>
	);
};
