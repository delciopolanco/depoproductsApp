import { FC } from 'react';
import {
	Breadcrumbs as MuiBreadcrumbs,
	BreadcrumbsProps as MuiBreadcrumbsProps,
	Grid
} from '@mui/material';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { Breadcrumb, BreadcrumbProps } from './breadcrumbs';

type BreadcrumbsProps = MuiBreadcrumbsProps & {
	links?: BreadcrumbProps[];
};

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ children, links }) => {
	return (
		<Grid item md={9} xs={12}>
			<MuiBreadcrumbs
				aria-label={'breadcrumb'}
				separator={<ArrowBackIosNewOutlinedIcon fontSize={'small'} />}
				sx={{ mt: 1 }}
			>
				{links?.map((link) => (
					<Breadcrumb key={link.label} {...link} />
				))}

				{children}
			</MuiBreadcrumbs>
		</Grid>
	);
};
