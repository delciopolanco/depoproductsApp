import { FC } from 'react';
import { TextField, InputAdornment, StandardTextFieldProps } from '@mui/material';
import { useField } from 'formik';
import { useCharCount } from '@hooks';
import { HelperError } from '@components';

type InputProps = StandardTextFieldProps & {
	name: string;
	showCharCount?: boolean;
};

export const Input: FC<InputProps> = ({ name, showCharCount, onChange, onBlur, ...others }) => {
	const charCounts = useCharCount(name);
	const [field, { error, value }] = useField(name);
	return (
		<>
			<TextField
				{...others}
				{...field}
				name={name}
				onChange={onChange || field.onChange}
				onBlur={onBlur || field.onBlur}
				InputProps={{
					endAdornment: showCharCount ? (
						<InputAdornment position={'end'}>{`${
							value?.length || 0
						} /${charCounts}`}</InputAdornment>
					) : null
				}}
			/>
			{!!error && <HelperError field={name} />}
		</>
	);
};
