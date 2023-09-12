import { Theme } from '@mui/material/styles';
import { hexToRGBA } from '@utils';
import palette from '../settings/palette';

const Alert = (theme: Theme) => {
	return {
		MuiAlert: {
			styleOverrides: {
				root: {
					border: 'solid 1px',
					fontSize: '14px',
					fontWeight: 600,
					borderRadius: '16px',
					'& .MuiAlertTitle-root': {
						fontSize: '14px'
					},

					'& a': {
						fontWeight: 400,
						color: 'inherit'
					},
					'& .MuiList-root': {
						listStyleType: 'disc',
						padding: '0 0 0 16px',
						fontSize: '14px',
						fontWeight: 600
					},
					'& .MuiListItem-root .MuiTypography-root': {
						display: ' list-item',
						fontSize: 14,
						paddingLeft: 0
					},
					'& .MuiAlert-message ': {
						overflow: 'visible',
						padding: 0
					}
				},
				standardSuccess: {
					borderColor: palette.success.dark,
					backgroundColor: hexToRGBA(palette.success.main, 0.12),
					'& .MuiAlert-icon': {
						color: palette.success.main
					}
				},
				standardInfo: {
					borderColor: palette.info.dark,
					backgroundColor: hexToRGBA(palette.text.primary, 0.12),
					'& .MuiAlert-icon': {
						color: palette.text.primary
					}
				},
				standardWarning: {
					borderColor: palette.warning.main,
					backgroundColor: theme.palette.common.white,
					'& .MuiAlert-icon': {
						color: palette.warning.dark
					}
				},

				standardError: {
					borderColor: palette.error.dark,
					backgroundColor: theme.palette.common.white,
					'& .MuiAlert-icon': {
						color: palette.error.main
					}
				},
				outlinedSuccess: {
					borderColor: palette.success.main,
					backgroundColor: theme.palette.common.white,
					color: palette.success.main,
					'& .MuiAlert-icon': {
						color: palette.success.main
					}
				},
				outlinedInfo: {
					borderColor: palette.info.light,
					backgroundColor: theme.palette.common.white,
					color: palette.text.primary,
					'& .MuiAlertTitle-root': {
						color: palette.text.primary
					},
					'& .MuiAlert-icon': {
						color: palette.text.primary
					}
				},
				outlinedWarning: {
					borderColor: palette.warning.main,
					backgroundColor: theme.palette.common.white,
					color: palette.warning.dark,
					'& .MuiAlertTitle-root': {
						color: palette.warning.dark
					},
					'& .MuiAlert-icon': {
						color: palette.warning.dark
					},
					'& .MuiListItemText-primary': {
						color: palette.warning.dark
					}
				},
				outlinedError: {
					borderColor: palette.error.main,
					backgroundColor: theme.palette.common.white,
					color: palette.error.main,
					'& .MuiAlertTitle-root': {
						color: palette.error.main
					},
					'& .MuiAlert-icon': {
						color: palette.error.main
					}
				},
				filled: {
					fontWeight: 400
				}
			}
		}
	};
};

export default Alert;
