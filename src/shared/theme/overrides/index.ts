import { Theme } from '@mui/material/styles';

// ** Overrides Imports
import MuiAlerts from './alerts';
import MuiSnackbar from './snackbar';
import MuiFab from './fab';
import MuiList from './list';
import MuiTypography from './typography';
import MuiPalette from './palette';

export const ColorPalette = (theme: Theme) => {
	const palette = MuiPalette(theme);

	return Object.assign(palette);
};

export const Components = (theme: Theme) => {
	const alerts = MuiAlerts(theme);
	const snackbar = MuiSnackbar(theme);
	const list = MuiList(theme);
	const fab = MuiFab(theme);

	return Object.assign(alerts, snackbar, list, fab);
};

export const Typography = (theme: Theme) => {
	const typography = MuiTypography(theme);

	return Object.assign(typography);
};
