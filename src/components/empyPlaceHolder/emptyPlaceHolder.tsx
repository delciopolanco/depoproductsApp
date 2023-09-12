import { Box, Button, Link, Typography, useTheme } from '@mui/material';
import { TestHarness } from '@components';
import { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import empty from '@images/empty.png';

export interface EmptyPlaceHolderProps {
	path?: string;
	buttonText?: string;
	variant?: 'link' | 'button';
	title?: string;
	message: string;
	height?: string;
	placeHolderheight?: string;
	children?: ReactNode;
	buttonAction?: () => void;
}

export const EmptyPlaceHolder: FC<EmptyPlaceHolderProps> = ({
	variant = 'button',
	placeHolderheight = '113px',
	height = 'auto',
	title = '',
	message,
	path,
	buttonText,
	buttonAction,
	children
}) => {
	const theme = useTheme();
	const { t } = useTranslation();
	return (
		<Box
			height={height}
			justifyContent={'center'}
			alignItems={'center'}
			display={'flex'}
			flexDirection={'column'}
		>
			<Box
				alt={'noResult'}
				component={'img'}
				src={empty}
				sx={{ height: placeHolderheight, mb: 2 }}
			/>
			<TestHarness value={'no-result-title'}>
				<Typography color={'textPrimary'} variant={'h3'} data-testid={'empty-row'}>
					{title || t('noResult')}
				</Typography>
			</TestHarness>
			<Box
				textAlign={'center'}
				display={'flex'}
				justifyContent={'center'}
				sx={{ verticallyAlign: 'center' }}
			>
				<TestHarness value={'no-result-message'}>
					<Typography color={'textSecondary'} variant={'body2'} sx={{ display: 'inline', mr: 1 }}>
						{message}
					</Typography>
				</TestHarness>
				{variant === 'link' && path && (
					<TestHarness value={'no-result-link'}>
						<Link color={'textPrimary'} component={RouterLink} to={path} sx={{ fontSize: '16px' }}>
							{buttonText || t('createOneForThem')}
						</Link>
					</TestHarness>
				)}
			</Box>
			{variant === 'button' && path && (
				<TestHarness value={'no-result-btnlink'}>
					<Button
						color={'primary'}
						component={RouterLink}
						sx={{ m: 3, fontSize: '16px' }}
						to={path}
						variant={'outlined'}
					>
						{buttonText}
					</Button>
				</TestHarness>
			)}
			{variant === 'button' && buttonAction && (
				<TestHarness value={'no-result-btnlink'}>
					<Button
						color={'primary'}
						sx={{ m: 3, fontSize: '16px' }}
						onClick={buttonAction}
						variant={'outlined'}
					>
						{buttonText}
					</Button>
				</TestHarness>
			)}
			{children}
		</Box>
	);
};
