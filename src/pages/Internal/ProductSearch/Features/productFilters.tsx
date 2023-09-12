import { FeatureWrapper } from '@components';
import styled from '@emotion/styled';
import {
	Box,
	Button,
	Chip,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	OutlinedInput,
	Select,
	SelectChangeEvent,
	TextField,
	Theme,
	Typography,
	useTheme
} from '@mui/material';
import { WebTypes, Execution } from '@shared';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCreateExecution } from '../Hook/useCreateExecution';
import { v4 } from 'uuid';

export const Root = styled(Box)(() => ({
	display: 'grid',
	gridTemplateRows: '1fr',
	gap: '1rem'
}));

type PropsProductFilters = {};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250
		}
	}
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
	return {
		fontWeight:
			personName.indexOf(name) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium
	};
}

export const ProductFilters: FC<PropsProductFilters> = () => {
	const { t } = useTranslation();

	const theme = useTheme();
	const [webTypes, setWebTypes] = useState<string[]>([]);
	const [description, setDescription] = useState<string>('');
	const createExecution = useCreateExecution();

	const webs = [
		{
			value: WebTypes.ALL,
			label: t('includeAll')
		},
		{
			value: WebTypes.COROTOS,
			label: t('corotos')
		},
		{
			value: WebTypes.EMARKET,
			label: t('emarket')
		},
		{
			value: WebTypes.LAPULGA,
			label: t('laPulga')
		},
		{
			value: WebTypes.MERCADOLIBRE,
			label: t('mercadoLibre')
		},
		{
			value: WebTypes.MARKETPLACE,
			label: t('marketPlace')
		}
	];

	const handleChange = (event: SelectChangeEvent<typeof webTypes>) => {
		const {
			target: { value }
		} = event;

		if (value.includes(WebTypes.ALL)) {
			setWebTypes([WebTypes.ALL]);
			return;
		}

		if (value.length === webs.length - 1 && !value.includes(WebTypes.ALL)) {
			setWebTypes([WebTypes.ALL]);
			return;
		}

		setWebTypes(typeof value === 'string' ? value.split(',') : value);
	};

	const getWebTypeLabel = (val: string) => {
		return webs.find((w) => w.value === val)?.label;
	};

	const onDelete = (value: string) => {
		const types = webTypes.filter((item) => item !== value);
		setWebTypes(types);
	};

	const search = () => {
		searchHandler(description, webTypes);
		setDescription('');
		setWebTypes([]);
	};

	const searchHandler = (searchText, webs) => {
		createExecution.mutateAsync({
			searchText,
			webs,
			uuid: v4()
		} as Execution);
	};

	return (
		<FeatureWrapper>
			<Root>
				<Typography variant={'h4'} mb={2}>
					{t('addSearchCriterias')}
				</Typography>
				<Grid container spacing={1}>
					<Grid
						item
						mt={2}
						md={5}
						xs={12}
						display={'flex'}
						justifyContent={'center'}
						alignSelf={'center'}
					>
						<FormControl sx={{ mt: -2, width: '100%' }}>
							<InputLabel>{t('webToSearch')}</InputLabel>
							<Select
								fullWidth
								multiple
								value={webTypes}
								onChange={handleChange}
								input={<OutlinedInput label="Chip" />}
								renderValue={(selected) => (
									<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.2 }}>
										{selected.map((value) => {
											return (
												<Chip
													size={'small'}
													key={value}
													label={getWebTypeLabel(value)}
													onDelete={() => onDelete(value)}
													onMouseDown={(e) => e.stopPropagation()}
												/>
											);
										})}
									</Box>
								)}
								MenuProps={MenuProps}
							>
								{webs.map((name) => (
									<MenuItem
										key={name.value}
										value={name.value}
										style={getStyles(name.value, webTypes, theme)}
									>
										{name.label}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
					<Grid item md={6} xs={12} display={'flex'} justifyContent={'center'} alignSelf={'center'}>
						<TextField
							fullWidth
							value={description}
							label={t('productDescription')}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</Grid>
					<Grid item md={1} xs={12} display={'flex'} justifyContent={'center'} alignSelf={'center'}>
						<Button
							disabled={webTypes.length === 0 || !description}
							fullWidth
							variant={'text'}
							sx={{
								fontSize: '16px',
								fontWeight: 600,
								whiteSpace: 'nowrap',
								maxHeight: '42px'
							}}
							onClick={search}
						>
							{t('search')}
						</Button>
					</Grid>
				</Grid>
			</Root>
		</FeatureWrapper>
	);
};
