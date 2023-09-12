import { FC } from 'react';
import { TextField } from '@mui/material';
import { useField, useFormikContext } from 'formik';
import { HelperError } from '@components';
import NumberFormat, { NumberFormatProps } from 'react-number-format';

type InputFormatProps = NumberFormatProps & {
	name: string;
	format?: string;
	error: boolean;
	fullWidth?: boolean;
};

export const InputFormat: FC<InputFormatProps> = ({
	name,
	onChange,
	onBlur,
	format,
	fullWidth
}) => {
	const [field, { error }] = useField(name);
	const { setFieldValue } = useFormikContext();
	return (
		<>
			<NumberFormat
				name={name}
				format={format}
				fullWidth={fullWidth}
				size={'medium'}
				customInput={TextField}
				onChange={onChange || field.onChange}
				mask={'_'}
				allowEmptyFormatting
				onValueChange={({ value }) => {
					setFieldValue(name, value);
				}}
				onBlur={onBlur || field.onBlur}
				error={Boolean(error)}
			/>
			{!!error && <HelperError field={name} />}
		</>
	);
};
