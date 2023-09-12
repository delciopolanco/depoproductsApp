import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
	AccordionSummary,
	Box,
	CircularProgress,
	IconButton,
	MenuItem,
	Skeleton,
	Typography
} from '@mui/material';
import { Execution } from '@shared';
import { FC } from 'react';
import {
	Root,
	CustomizedAccordion,
	CustomizedBox,
	CustomizedTypography,
	CustomizedSocialBox
} from './shareStyles';

type PropsProductItem = {
	expanded?: boolean;
	execute: Execution;
};

export const ProductItemSkeleton: FC<PropsProductItem> = () => {
	return (
		<Root>
			<CustomizedAccordion expanded={false}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<CustomizedBox>
						<CustomizedTypography variant={'body1'}>
							<Skeleton variant="rectangular" width={250} height={10} />
						</CustomizedTypography>
						<Typography variant={'body2'} color={'text'} fontSize={10}>
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
						</Typography>
						<CustomizedSocialBox>
							{Array.from({ length: 4 }).map((_, i) => (
								<MenuItem
									key={i}
									sx={{
										display: 'grid',
										fontSize: 10,
										gridTemplateColumns: '1fr 1fr',
										gap: '0.2rem'
									}}
									LinkComponent={'label'}
								>
									<Skeleton variant="rectangular" width={100} height={10} />
								</MenuItem>
							))}
						</CustomizedSocialBox>
					</CustomizedBox>
				</AccordionSummary>
			</CustomizedAccordion>
			<IconButton>
				<CircularProgress size={20} />
			</IconButton>
		</Root>
	);
};
