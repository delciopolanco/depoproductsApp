import {
	SortDirection,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TableSortLabel
} from '@mui/material';
import { Product, formatToPrice, iconByWeb } from '@shared';
import { FC, KeyboardEventHandler, useState } from 'react';
import i18n from 'src/i18n';

interface Column {
	id: 'web' | 'description' | 'price' | 'store';
	label: string;
	width?: string;
	align?: 'right' | 'left';
	sortable?: boolean;
}

export const columns: readonly Column[] = [
	{ id: 'web', label: i18n.t('web'), width: '10%', align: 'left' },
	{ id: 'description', label: i18n.t('description'), width: '50%', align: 'left', sortable: true },
	{ id: 'price', label: i18n.t('price'), width: '20%', align: 'left', sortable: true },
	{ id: 'store', label: i18n.t('store'), width: '20%', align: 'left', sortable: true }
];

type ProductSortLabelProps = {
	direction: SortDirection;
	orderBy: string;
	header: Column;
	handleSort?: (e, id, direction) => void;
};

export const ProductSortLabel: FC<ProductSortLabelProps> = ({
	direction,
	orderBy,
	header,
	handleSort
}) => {
	const [order, setOrder] = useState<SortDirection>(direction);

	const handleSorting = (e) => {
		const newDirection = order === 'asc' ? 'desc' : 'asc';
		setOrder(newDirection);

		if (handleSort) handleSort(e, header.id, newDirection);
	};

	return (
		<TableSortLabel
			active={orderBy === header.id}
			direction={order === 'asc' ? 'asc' : 'desc'}
			onClick={handleSorting}
		>
			{header.label}
		</TableSortLabel>
	);
};

type ProductItemDetailProps = {
	products: Product[];
	orderBy: string;
	order: SortDirection;
	handleSort: (
		e: KeyboardEventHandler<HTMLInputElement>,
		name: string,
		direction: SortDirection
	) => void;
};

export const ProductItemDetail: FC<ProductItemDetailProps> = ({
	products,
	orderBy,
	order,
	handleSort
}) => {
	return (
		<Table>
			<TableHead>
				<TableRow hover>
					{columns.map((head) => (
						<TableCell
							key={head.id}
							align={head.align}
							sx={{ width: head.width, fontWeight: 600 }}
							sortDirection={orderBy === head.id ? order : false}
						>
							{head.sortable && (
								<ProductSortLabel
									header={head}
									direction={order}
									orderBy={orderBy}
									handleSort={handleSort}
								/>
							)}

							{!head.sortable && head.label}
						</TableCell>
					))}
				</TableRow>
			</TableHead>
			<TableBody>
				{products.map((product) => (
					<TableRow key={product.id} hover>
						<TableCell>{iconByWeb[product.web]}</TableCell>
						<TableCell>{product.description}</TableCell>
						<TableCell>{formatToPrice(product.price)}</TableCell>
						<TableCell>{product.store}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};
