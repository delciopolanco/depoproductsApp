/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik, Form as FormikForm, FormikValues, FormikConfig } from 'formik';
import { FC } from 'react';
import { FormikDevTools } from '..';

type PropsForm = FormikConfig<FormikValues> & {
	children?: any;
	onSubmit: (v: FormikValues) => void;
};

const Manage = ({ children, ...others }) => {
	return children(others);
};

export const Form: FC<PropsForm> = ({ children, ...others }) => {
	const showDevTools = process.env.NODE_ENV === 'development';
	return (
		<Formik {...others}>
			{() => {
				return (
					<FormikForm>
						<Manage>{children}</Manage>
						{showDevTools && <FormikDevTools />}
					</FormikForm>
				);
			}}
		</Formik>
	);
};
