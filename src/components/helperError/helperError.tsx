import { StatusIcon } from '@components';
import { Box, Grid } from '@mui/material';
import { Status } from '@shared/enums';
import { getIn, useFormikContext } from 'formik';
import { FC } from 'react';

type HelperErrorProps = {
	field: string;
	withTouched?: boolean;
};

export const HelperError: FC<HelperErrorProps> = ({ field, withTouched }) => {
	const { errors, touched } = useFormikContext();

	const error = getIn(errors, field);
	const hasError = withTouched
		? getIn(errors, field) && getIn(touched, field)
		: getIn(errors, field);

	if (!hasError) return null;

	return (
		<>
			<Grid
				container
				sx={{
					mt: 1,
					gap: '.2rem',
					alignItems: 'center',
					backgroundColor: 'transparent',
					display: 'flex',
					flexWrap: 'initial'
				}}
			>
				<Grid item>
					<StatusIcon status={Status.ERROR} />
				</Grid>
				<Grid item>
					<Box>{error}</Box>
				</Grid>
			</Grid>
		</>
	);
};
