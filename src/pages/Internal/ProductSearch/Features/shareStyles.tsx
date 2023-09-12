import { Accordion, Box, Typography, styled } from '@mui/material';

export const Root = styled(Box)(() => ({
	display: 'grid',
	gridTemplateColumns: '1fr min-content',
	alignItems: 'flex-start',
	gap: '0.2rem'
}));

export const CustomizedAccordion = styled(Accordion)(({ theme }) => ({
	border: `1px solid ${theme.palette.grey[400]}`,
	'&.Mui-expanded:last-of-type': {
		marginBottom: '10px'
	},
	'&.MuiPaper-root': {
		margin: 0
	},
	'&.MuiAccordionSummary-content': {
		margin: 0,
		display: 'block'
	}
}));

export const CustomizedBox = styled(Box)(({ theme }) => ({
	display: 'grid',
	gridTemplateColumns: '400px 70px 1fr',
	gap: '0.2rem',
	alignItems: 'center',

	[theme.breakpoints.down('md')]: {
		gridTemplateRows: 'min-content min-content 1fr',
		gridTemplateColumns: 'none'
	},
	[theme.breakpoints.between('sm', 'xs')]: {
		gridTemplateRows: 'min-content min-content 1fr',
		gridTemplateColumns: 'none'
	}
}));

export const CustomizedSocialBox = styled(Box)(({ theme }) => ({
	display: 'grid',
	gridTemplateColumns: 'repeat(5, 1fr);',
	gap: '0.2rem',
	alignItems: 'center',

	[theme.breakpoints.down('md')]: {
		gridTemplateColumns: 'repeat(5, 1fr);'
	},
	[theme.breakpoints.between('sm', 'xs')]: {
		gridTemplateColumns: '1fr;'
	}
}));

export const CustomizedTypography = styled(Typography)(({ theme }) => ({
	flexShrink: 0,
	fontWeight: '600',
	wordWrap: 'break-word',
	wordBreak: 'break-all'
}));
