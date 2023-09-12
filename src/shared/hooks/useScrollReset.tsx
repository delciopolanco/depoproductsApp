import { currentStepSelector } from '@components';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

export const useScrollReset = (): null => {
	const currentStep = useRecoilValue(currentStepSelector);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [currentStep]);

	return null;
};
