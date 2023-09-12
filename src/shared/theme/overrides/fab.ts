import { Theme } from '@mui/material/styles';
import palette from '../settings/palette';

const Fab = (theme: Theme) => {
	return {
		MuiFab: {
			styleOverrides: {
				default: {
					borderColor: 'none',
					background: 'none',
					boxShadow: 'none',
					'&:hover,&:active': {
						borderColor: 'none',
						background: palette.action.hover,
						boxShadow: 'none'
					}
				}
			}
		}
	};
};

export default Fab;
