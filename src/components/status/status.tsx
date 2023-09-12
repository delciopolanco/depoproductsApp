import { experimentalStyled } from '@mui/material';
import { Status } from '@shared';
import { FC } from 'react';
import {
	Info as InfoIcon,
	VerifiedRounded as checkedIcon,
	Warning as warningIcon,
	Error as errorIcon
} from '@mui/icons-material';

interface StatusProps {
	status: Status;
}

const icons = {
	info: InfoIcon,
	sucess: checkedIcon,
	warning: warningIcon,
	error: errorIcon
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StatusElement: any = experimentalStyled('span')(({ theme, status }: any) => ({
	display: 'grid',
	alignItems: 'start',
	justifyItems: 'center',
	color: theme.palette[status].main
}));

export const StatusIcon: FC<StatusProps> = ({ status = Status.ERROR }) => {
	const Icon = icons[status];

	return (
		<StatusElement status={status}>
			<Icon />
		</StatusElement>
	);
};
