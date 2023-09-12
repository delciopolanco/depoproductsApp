import { FC, ReactNode } from 'react';
import { TestContext } from './testContext';

interface TestHarnessProps {
	children: ReactNode;
	value: string;
}

export const TestHarness: FC<TestHarnessProps> = ({ children, value }) => {
	return <TestContext.Provider value={value}>{children}</TestContext.Provider>;
};
