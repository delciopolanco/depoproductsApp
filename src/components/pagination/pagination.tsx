import {
	TablePagination as MuiTablePagination,
	TablePaginationProps,
	Pagination as MuiPagination,
	PaginationProps
} from '@mui/material';
import { FC } from 'react';

type TablePropsPagination = TablePaginationProps & {};

export const TablePagination: FC<TablePropsPagination> = (props) => {
	return <MuiTablePagination component={'div'} {...props} />;
};

type PropsPagination = PaginationProps & {};

export const Pagination: FC<PropsPagination> = (props) => {
	return <MuiPagination {...props} />;
};
