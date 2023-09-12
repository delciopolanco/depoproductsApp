import { EmptyPlaceHolder, FeatureWrapper } from '@components';
import { Box } from '@mui/material';
import { Execution } from '@shared/models';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useExecutions, useGetExecutions } from '../Hook';
import { ProductItem } from './productItem';
import { ProductItemSkeleton } from './productItemSkeleton';

type PropsProductList = {};

export const ProductList: FC<PropsProductList> = () => {
	const { isFetching, isSuccess } = useGetExecutions();
	const { executions } = useExecutions();
	const { t } = useTranslation();
	const [expanded, setExpanded] = useState<string | false>(false);

	const renderSkeleton = () => {
		return Array.from({ length: 10 }).map((_, key) => (
			<ProductItemSkeleton key={key} execute={{} as Execution} />
		));
	};

	const renderRows = () => {
		return executions.map((execute) => (
			<ProductItem
				key={execute.uuid}
				execute={execute}
				expanded={expanded}
				setExpanded={setExpanded}
			/>
		));
	};

	const renderEmpty = () => {
		return (
			<EmptyPlaceHolder
				height={'430px'}
				title={t('youDontHaveAnySearchYet')}
				message={t('registerYourFirstSearch')}
			/>
		);
	};

	return (
		<FeatureWrapper>
			<Box sx={{ display: 'grid', gap: '.8rem' }}>
				{isFetching && renderSkeleton()}
				{isSuccess && !!executions.length && renderRows()}
				{isSuccess && !executions.length && renderEmpty()}
			</Box>
		</FeatureWrapper>
	);
};
