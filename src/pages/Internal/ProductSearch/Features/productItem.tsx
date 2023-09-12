import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
	AccordionDetails,
	AccordionSummary,
	Box,
	CircularProgress,
	IconButton,
	MenuItem,
	Skeleton,
	Typography,
	useTheme
} from '@mui/material';
import {
	Execution,
	ExecutionDetailSelector,
	Product,
	WebTypes,
	formatToNumber,
	formatToPrice,
	iconByWeb
} from '@shared';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDeleteExecution, useGetProducts } from '../Hook';
import { useProductTotals } from '../Hook/useProductTotals';
import { ProductItemDetail } from './productItemDetail';
import { ProductItemDetailSkeleton } from './productItemDetailSkeleton';
import {
	CustomizedAccordion,
	CustomizedBox,
	CustomizedSocialBox,
	CustomizedTypography,
	Root
} from './shareStyles';
import { useRecoilState } from 'recoil';

type PropsProductItem = {
	expanded?: string | false;
	execute: Execution;
	setExpanded: Dispatch<SetStateAction<string | false>>;
};

export const ProductItem: FC<PropsProductItem> = ({ execute, expanded, setExpanded }) => {
	const theme = useTheme();
	const { t } = useTranslation();
	const { totals } = useProductTotals(execute);
	const deleteExecution = useDeleteExecution(execute);
	const iconWebs =
		execute?.webs && execute?.webs[0] === WebTypes.ALL
			? [
					WebTypes.EMARKET,
					WebTypes.LAPULGA,
					WebTypes.MARKETPLACE,
					WebTypes.MERCADOLIBRE,
					WebTypes.COROTOS
			  ]
			: execute?.webs || [];
	const webs = totals?.webs || iconWebs;
	const { isFetching, isSuccess } = useGetProducts(expanded === execute.uuid ? execute.uuid : '');
	const [products, setProducts] = useRecoilState(ExecutionDetailSelector(execute.uuid));

	const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
		setExpanded(isExpanded ? panel : false);
	};

	const handleSort = (e, property, direction) => {
		const productList = [...products].sort((a, b) => {
			if (direction === 'asc') {
				if (a[property] > b[property]) return 1;
				if (a[property] < b[property]) return -1;
			}

			if (direction === 'desc') {
				if (a[property] < b[property]) return 1;
				if (a[property] > b[property]) return -1;
			}

			return 0;
		});

		setProducts(productList);
	};

	return (
		<Root>
			<CustomizedAccordion
				expanded={expanded === execute.uuid}
				onChange={handleChange(execute.uuid)}
			>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<CustomizedBox>
						<CustomizedTypography variant={'body1'}>
							{!execute.isFetching && totals.search}
							{execute.isFetching && execute.searchText}
						</CustomizedTypography>

						<Typography variant={'body2'} color={'text'} fontSize={10} textAlign={'center'}>
							{!execute.isFetching && (
								<Box
									component={'span'}
									sx={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 0 }}
								>
									<span>{formatToNumber(totals.total)}</span>
									<span>{totals.total > 1 ? t('coincidences') : t('coincidence')}</span>{' '}
								</Box>
							)}

							{execute.isFetching && (
								<Box
									component={'span'}
									sx={{
										display: 'grid',
										gridTemplateRows: '1fr 1fr',
										gap: 0.5,
										justifyContent: 'center'
									}}
								>
									<span>
										<Skeleton variant="rectangular" width={10} height={10} />
									</span>
									<span>
										<Skeleton variant="rectangular" width={40} height={10} />
									</span>
								</Box>
							)}
						</Typography>

						<CustomizedSocialBox>
							{webs.map((web) => (
								<MenuItem
									key={`${web?.web ? web.web : web}-${execute.uuid}`}
									sx={{
										display: 'grid',
										fontSize: 10,
										gridTemplateColumns: '1fr 1fr',
										gap: '0.2rem',
										width: '100px'
									}}
									LinkComponent={'label'}
								>
									{iconByWeb[web?.web || web]}
									{execute.isFetching && (
										<Typography variant={'body2'} color={'text'}>
											<Skeleton variant="rectangular" width={60} height={10} />
										</Typography>
									)}

									{!execute.isFetching && (
										<Typography variant={'body2'} color={'text'}>
											{formatToPrice(web.minPrice)}
										</Typography>
									)}
								</MenuItem>
							))}
						</CustomizedSocialBox>
					</CustomizedBox>
				</AccordionSummary>
				<AccordionDetails>
					{isFetching && <ProductItemDetailSkeleton />}
					{isSuccess && (
						<ProductItemDetail
							products={products}
							handleSort={handleSort}
							order={'asc'}
							orderBy={'price'}
						/>
					)}
				</AccordionDetails>
			</CustomizedAccordion>
			{!execute.isFetching && (
				<IconButton onClick={() => deleteExecution.mutateAsync()}>
					<DeleteOutlineOutlinedIcon fontSize={'small'} style={{ fill: theme.palette.grey[500] }} />
				</IconButton>
			)}

			{execute.isFetching && (
				<IconButton>
					<CircularProgress size={20} />
				</IconButton>
			)}
		</Root>
	);
};
