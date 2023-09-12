import { FC, ReactNode, useEffect } from 'react';
import { Box, Breadcrumbs, Container, experimentalStyled, Grid, Typography } from '@mui/material';
import { Breadcrumb, BreadcrumbProps } from '@components/breadcrumbs';
import { uniqueId } from 'lodash/fp';
import { Back } from '..';
import { ContainerProps } from '@mui/system';
import { useTranslation } from 'react-i18next';

type PageProps = ContainerProps & {
	children?: ReactNode;
	breadCrumbs?: BreadcrumbProps[];
	backText?: string;
	backIcon?: boolean;
	headerText?: string;
	title?: string;
	headerActions?: ReactNode;
};

const PageRoot = experimentalStyled('div')(() => ({
	alignItems: 'center',
	display: 'grid',
	gap: '1rem',
	gridTemplateColumns: '1fr',
	padding: '1.625rem 0.6rem',

	'& + &': {
		marginTop: '1rem'
	}
}));

export const Page: FC<PageProps> = ({
	title = '',
	children,
	breadCrumbs,
	backText,
	backIcon,
	headerText,
	headerActions,
	...others
}) => {
	const { t } = useTranslation();

	useEffect(() => {
		document.title = `${t('DepoTienda')}- ${title}`;
	}, [title, t]);

	return (
		<PageRoot>
			{!!breadCrumbs?.length && (
				<Box sx={{ mb: 2 }}>
					<Breadcrumbs>
						{breadCrumbs.map((b) => {
							if (b.label)
								return <Breadcrumb key={`${uniqueId(b.label)}`} label={b.label} path={b.path} />;
						})}
					</Breadcrumbs>
				</Box>
			)}

			<Container {...others}>
				{backText && <Back backText={backText} backIcon={backIcon} />}
				{headerText && (
					<Grid container alignItems={'baseline'} justifyContent={'space-between'} spacing={3}>
						<Grid item>
							<Typography color={'textSecondary'} variant={'h5'}>
								{headerText}
							</Typography>
						</Grid>
						{headerActions && (
							<Grid item>
								<Box>{headerActions}</Box>
							</Grid>
						)}
					</Grid>
				)}
				<Box sx={{ mt: 3 }}>{children}</Box>
			</Container>
		</PageRoot>
	);
};
