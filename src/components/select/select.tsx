import { FC } from 'react';
import { uniqueId } from 'lodash/fp';
import {
	Select as MuiSelect,
	MenuItem as MuiMenuItem,
	SelectProps as MuiSelectProps,
	InputLabel,
	FormControl
} from '@mui/material';
import { useField } from 'formik';
import { HelperError } from '@components';
export interface Item {
	label: string;
	value: string;
}
type SelectProps = MuiSelectProps & {
	items: Item[];
	label?: string;
	withTouched?: boolean;
};

export const Select: FC<SelectProps> = ({
	autoWidth,
	size = 'medium',
	label = '',
	items,
	value,
	children,
	withTouched,
	...r
}) => {
	const labelId = uniqueId(label);
	const [field, { error }] = useField(r.name as string);

	if (children) {
		return <MuiSelect>{children}</MuiSelect>;
	}

	return (
		<FormControl fullWidth size={size}>
			{label && <InputLabel id={labelId}>{label}</InputLabel>}{' '}
			<MuiSelect
				size={size}
				error={Boolean(error)}
				{...{
					...r,
					label,
					labelId,
					variant: 'outlined',
					autoWidth: autoWidth || false,
					value
				}}
			>
				{children ||
					items.map(({ label: itemLabel, value: itemValue }) => (
						<MuiMenuItem key={itemValue} value={itemValue}>
							{itemLabel}
						</MuiMenuItem>
					))}
			</MuiSelect>
			{!!error && <HelperError field={field.name} withTouched={withTouched} />}
		</FormControl>
	);
};
