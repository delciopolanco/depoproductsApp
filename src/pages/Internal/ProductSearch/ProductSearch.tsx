import { Page } from '@components';
import { useTranslation } from 'react-i18next';
import { ProductFilters } from './Features/productFilters';
import { ProductList } from './Features/productList';

export const ProductSearch = () => {
	const { t } = useTranslation();

	return (
		<Page title={t('searchList')}>
			<ProductFilters />
			<ProductList />
		</Page>
	);
};
