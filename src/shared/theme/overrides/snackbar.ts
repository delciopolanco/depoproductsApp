import { Theme } from '@mui/material/styles';
import palette from '../settings/palette';

const Snackbar = (theme: Theme) => {
	return {
		MuiSnackbar: {
			styleOverrides: {
				root: {
					'& .MuiPaper-root': {
						padding: '0px',
						margin: '0px',
						backgroundColor: theme.palette.common.white,
						color: palette.text.primary,
						fontWeight: '600',
						border: 'none',
						boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2)',
						'& .MuiPaper-root': {
							boxShadow: 'none',
							color: theme.palette.text.primary,
							backgroundColor: theme.palette.common.white
						}
					},
					'& .MuiAlert-standardError': {
						border: 'none',

						backgroundColor: theme.palette.common.white
					},
					'& .MuiSnackbarContent-message': {
						backgroundColor: theme.palette.common.white,
						padding: '0',
						fontWeight: '600',
						fontSize: '16px'
					},
					'& .MuiAlert-message': {
						color: palette.text.primary,
						fontWeight: '600',
						fontSize: '16px',
						overflow: 'visible',
						padding: '12px 0'
					},
					'& .MuiSnackbarContent-action': {
						marginRight: '0px',
						paddingRight: '0px'
					},
					'& .MuiIconButton-root': {
						color: palette.text.secondary,
						fontWeight: '600',
						top: '-12px',
						right: '2px'
					},
					'& .MuiAlert-icon': {
						marginRight: '0px',
						alignSelf: 'center',
						padding: '0 0 0  12px',
						'& #ExclamationIcon': {
							color: palette.error.main,
							fill: palette.error.main
						},
						'& #CheckCircleIcon': {
							color: palette.success.main,
							fill: palette.success.main
						},
						'& #ExclamationCircleIcon': {
							color: palette.warning.main,
							fill: palette.warning.main
						}
					},
					'& div[role=status]': {
						color: ' #223136'
					}
				}
			}
		}
	};
};

export default Snackbar;
