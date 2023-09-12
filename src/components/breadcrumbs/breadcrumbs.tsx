import { FC } from 'react';
import { Typography, Link, TypographyProps, LinkProps, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export type BreadcrumbProps = TypographyProps &
	LinkProps & {
		label: string;
		path?: string;
	};

export const Breadcrumb: FC<BreadcrumbProps> = (props) => {
	const { label, path, variant = 'subtitle2', color = 'textSecondary' } = props;
	const theme = useTheme();

	return path ? (
		<Link
			color={path ? theme.palette.primary.main : color}
			underline={'always'}
			component={RouterLink}
			to={path}
			variant={variant}
			{...props}
		>
			{label}
		</Link>
	) : (
		<Typography {...props} variant={variant}>
			{label}
		</Typography>
	);
};
