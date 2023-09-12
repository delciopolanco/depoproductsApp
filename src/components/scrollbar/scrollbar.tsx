import { forwardRef } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import type { ScrollBarProps as PerfectScrollbarProps } from 'react-perfect-scrollbar';
import { Box } from '@mui/material';

type ScrollbarProps = PerfectScrollbarProps & {};

export const Scrollbar = forwardRef<HTMLDivElement, ScrollbarProps>((props, ref) => {
	const { children, ...other } = props;

	const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
		navigator.userAgent
	);

	if (isMobile) {
		return (
			<Box ref={ref} sx={{ overflowX: 'auto' }}>
				{children}
			</Box>
		);
	}

	return (
		<PerfectScrollbar
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			ref={ref}
			{...other}
		>
			{children}
		</PerfectScrollbar>
	);
});
