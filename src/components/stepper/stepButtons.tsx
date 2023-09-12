import { FC, ReactNode } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentStepSelector, stepCountSelector, stepNavigationSelector } from './state';
import { Box, CircularProgress } from '@mui/material';
import { useTranslation } from 'react-i18next';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CheckIcon from '@mui/icons-material/Check';
import { Button } from '@components';

type StepperButtonsProps = {
	children?: React.ReactNode | null;
	additionalActions?: ReactNode;
	showPreviousStep?: boolean;
	isLoadingNext?: boolean;
	disableNext?: boolean;
	nextHandler?: () => void;
	previousHandler?: () => void;
};
export const StepperButtons: FC<StepperButtonsProps> = ({
	showPreviousStep,
	disableNext,
	isLoadingNext,
	nextHandler,
	previousHandler
}) => {
	const stepCount = useRecoilValue(stepCountSelector);
	const [currentStep, setCurrentStep] = useRecoilState(currentStepSelector);
	const { prevStep, nextStep } = useRecoilValue(stepNavigationSelector);
	const { t } = useTranslation();

	if (!stepCount) {
		return null;
	}
	const handleNextStep = async () => {
		if (nextHandler) {
			nextHandler();
			return;
		}
		if (!nextHandler) {
			setCurrentStep(currentStep + 1);
		}
	};
	const handlePreviousStep = async () => {
		if (previousHandler) {
			previousHandler();
			return;
		}
		if (!previousHandler) {
			setCurrentStep(currentStep - 1);
		}
	};

	return (
		<Box sx={{ display: 'grid', gridAutoFlow: 'column', justifyContent: 'end' }}>
			{showPreviousStep && prevStep && (
				<Button variant={'outlined'} onClick={handlePreviousStep}>
					{t('back')}
				</Button>
			)}
			{currentStep >= 2 && (
				<Button
					sx={{ marginLeft: '1rem' }}
					disabled={disableNext}
					onClick={handleNextStep}
					variant={'contained'}
					startIcon={isLoadingNext && <CircularProgress style={{ width: 20, height: 20 }} />}
					endIcon={<CheckIcon style={{ width: 20, height: 20 }} />}
				>
					{t('applyToRol')}
				</Button>
			)}
			{nextStep && currentStep <= 2 && (
				<Button
					sx={{ marginLeft: '1rem' }}
					disabled={disableNext}
					onClick={handleNextStep}
					variant={'contained'}
					startIcon={isLoadingNext && <CircularProgress style={{ width: 20, height: 20 }} />}
					endIcon={<NavigateNextIcon style={{ width: 20, height: 20 }} />}
				>
					{t('continue')}
				</Button>
			)}
		</Box>
	);
};
