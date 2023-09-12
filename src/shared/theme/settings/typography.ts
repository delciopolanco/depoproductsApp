import palette from './palette';

const typography = {
	fontSize: 16,
	fontWeightLight: 400,
	fontWeightRegular: 400,
	fontWeightMedium: 500,
	fontWeightSemiBold: 600,
	fontWeightBold: 700,
	fontWeightExtraBold: 800,
	fontFamily: '"Open Sans", sans-serif',

	h1: {
		fontSize: 40,
		color: palette.text.primary,
		fontFamily: 'questa-sansbold, sans-serif',
		fontWeight: 700
	},
	h2: {
		fontSize: 28,
		color: palette.text.primary,
		fontFamily: 'questa-sansregular, sans-serif',
		fontWeight: 300,
		lineHeight: 1.2
	},
	h3: {
		fontSize: 24,
		color: palette.text.primary,
		fontFamily: 'questa-sansmedium, sans-serif',
		fontWeight: 500
	},
	h4: {
		fontSize: 22,
		color: palette.text.primary,
		fontFamily: 'questa-sansbold, sans-serif',
		fontWeight: 700
	},
	h5: {
		fontSize: 20,
		color: palette.text.primary,
		fontFamily: 'questa-sansregular, sans-serif',
		fontWeight: 300
	},
	h6: {
		fontSize: 18,
		color: palette.text.primary,
		fontFamily: 'questa-sansbold, sans-serif',
		fontWeight: 700
	},
	subtitle1: {
		letterSpacing: '0.15px',
		color: palette.text.primary
	},
	subtitle2: {
		letterSpacing: '0.1px',
		color: palette.text.secondary
	},
	body1: {
		letterSpacing: '0.15px',
		color: palette.text.primary
	},
	body2: {
		lineHeight: 1.6,
		letterSpacing: '0.15px',
		color: palette.text.secondary
	},
	button: {
		fontSize: 15,
		letterSpacing: '0.4px',
		color: palette.text.primary
	},
	caption: {
		lineHeight: 1.4,
		letterSpacing: '0.4px',
		color: palette.text.secondary
	},
	overline: {
		color: palette.text.secondary
	}
};

export default typography;
