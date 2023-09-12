import { useState } from 'react';
import { FormikConsumer } from 'formik';
import { Box, Drawer } from '@mui/material';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const drawerWidth = 380;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
	open?: boolean;
}>(({ theme, open }) => ({
	flexGrow: 1,
	transition: theme.transitions.create('margin', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen
	}),
	marginRight: -drawerWidth,
	...(open && {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginRight: 0
	}),
	position: 'fixed',
	width: drawerWidth + 40,
	height: '100%',
	zIndex: '1200',
	top: 0,
	right: 0
}));

export const FormikDevTools = () => {
	const [open, setOpen] = useState(false);
	return (
		<Main open={open}>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' }
				}}
				variant="persistent"
				anchor="right"
				open={open}
			>
				<Box sx={{ margin: '64px 0 0 0' }}>
					<FormikConsumer>
						{(formikState) => (
							<pre
								style={{
									background: '#f6f8fa',
									fontSize: '.65rem',
									padding: '.5rem'
								}}
							>
								<strong>FormikConsumer</strong> ={JSON.stringify(formikState, null, 2)}
							</pre>
						)}
					</FormikConsumer>
				</Box>
			</Drawer>
			<IconButton
				color="inherit"
				edge="end"
				onClick={() => setOpen(!open)}
				sx={{
					zIndex: '2500',
					position: 'absolute',
					width: '40px',
					height: '40px',
					bottom: '15px',
					left: `${open ? '22px' : '-22px'}`
				}}
			>
				{open ? (
					<ArrowCircleRightIcon sx={{ width: '40px', height: '40px', fill: '#899AEC' }} />
				) : (
					<ArrowCircleLeftIcon sx={{ width: '40px', height: '40px', fill: '#899AEC' }} />
				)}
			</IconButton>
		</Main>
	);
};
