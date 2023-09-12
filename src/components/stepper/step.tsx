import { Step as MuiStep, StepLabel, StepProps as MuiStepProps } from '@mui/material';
import type { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { stepSelector } from './state';

type StepProps = MuiStepProps & {
	stepKey: number;
	label?: string;
	path?: string;
};

export const Step: FC<StepProps> = ({ stepKey, ...props }) => {
	const label = useRecoilValue(stepSelector(stepKey));

	if (!label) {
		return null;
	}

	return (
		<MuiStep key={label} {...props}>
			<StepLabel>{label}</StepLabel>
		</MuiStep>
	);
};
