import { Skeleton, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import { ProductSortLabel, columns } from './productItemDetail';

export const ProductItemDetailSkeleton: FC = () => {
	return (
		<Table>
			<TableHead>
				<TableRow hover>
					{columns.map((head) => (
						<TableCell
							key={head.id}
							align={head.align}
							sx={{ width: head.width, fontWeight: 600 }}
							sortDirection={false}
						>
							{head.sortable && <ProductSortLabel header={head} direction={false} orderBy={''} />}
							{!head.sortable && head.label}
						</TableCell>
					))}
				</TableRow>
			</TableHead>
			<TableBody>
				{Array.from({ length: 10 }).map((_, i) => (
					<TableRow key={i} hover>
						<TableCell>
							<Skeleton variant="circular" width={10} height={10} />
						</TableCell>
						<TableCell>
							<Skeleton variant="circular" width={50} height={10} />
						</TableCell>
						<TableCell>
							<Skeleton variant="circular" width={20} height={10} />
						</TableCell>
						<TableCell>
							<Skeleton variant="circular" width={20} height={10} />
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};
