import { Box, Container, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

type FooterProps = { children?: ReactNode };

export const Footer: FC<FooterProps> = ({ children, ...others }) => {
	const { t } = useTranslation();

	return (
		<Box sx={{ backgroundColor: 'background.default', pt: 2 }} {...others}>
			<Container maxWidth={'lg'} sx={{ display: 'flex', justifyContent: 'center' }}>
				<Typography variant={'body2'} sx={{ fontWeight: 'bold' }}>
					{t('Powered By DeepCooding')}
				</Typography>
				{children}
			</Container>
		</Box>
	);
};
