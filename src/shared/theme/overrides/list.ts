import { Theme } from '@mui/material/styles';
import palette from '../settings/palette';

const List = (theme: Theme) => {
	return {
		MuiList: {
			styleOverrides: {
				root: {
					fontSize: '0.875rem'
				}
			}
		},
		MuiListItem: {
			styleOverrides: {
				root: {
					padding: 0,
					margin: 0,
					textIndent: 5,
					'& .MuiListItemText-root.MuiListItemText-dense': {
						margin: '2px 0'
					}
				}
			}
		},
		MuiListItemIcon: {
			styleOverrides: {
				root: {
					minWidth: 0,
					marginRight: theme.spacing(3),
					color: palette.text.secondary
				}
			}
		},
		MuiListItemAvatar: {
			styleOverrides: {
				root: {
					minWidth: 0,
					marginRight: theme.spacing(4)
				}
			}
		},
		MuiListItemText: {
			styleOverrides: {
				dense: {
					'& .MuiListItemText-primary': {
						color: palette.text.primary
					},
					'& .MuiListItemText-primary, & .MuiListItemText-secondary': {
						lineHeight: 1.43
					}
				}
			}
		},
		MuiListSubheader: {
			styleOverrides: {
				root: {
					fontWeight: 600,
					textTransform: 'uppercase',
					color: palette.text.primary
				}
			}
		}
	};
};

export default List;
