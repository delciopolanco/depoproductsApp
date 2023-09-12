import { useState, FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Collapse, ListItem, ListItemProps } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button } from '@components';

type NavItemProps = ListItemProps & {
	active?: boolean;
	children?: ReactNode;
	depth: number;
	icon?: ReactNode;
	info?: ReactNode;
	open?: boolean;
	path?: string;
	title: string;
};

export const NavItem: FC<NavItemProps> = (props) => {
	const { active, children, depth, icon, info, open: openProp, path, title, ...other } = props;
	const [open, setOpen] = useState<boolean>(openProp as boolean);
	const navigate = useNavigate();

	let paddingLeft = 16;

	if (depth > 0) {
		paddingLeft = 32 + 8 * depth;
	}

	const redirect = () => navigate(path as string);

	const handleToggle = (): void => {
		setOpen((prevOpen) => !prevOpen);
		redirect();
	};

	// Branch
	if (children) {
		return (
			<ListItem
				disableGutters
				sx={{
					display: 'block',
					py: 0
				}}
				{...other}
			>
				<Button
					endIcon={
						!open ? <ChevronRightIcon fontSize={'small'} /> : <ExpandMoreIcon fontSize={'small'} />
					}
					onClick={handleToggle}
					startIcon={icon}
					sx={{
						color: 'text.secondary',
						fontWeight: 'fontWeightMedium',
						justifyContent: 'flex-start',
						pl: `${paddingLeft}px`,
						pr: '8px',
						py: '12px',
						textAlign: 'left',
						textTransform: 'none',
						width: '100%'
					}}
					variant={'text'}
				>
					<Box sx={{ flexGrow: 1 }}>{title}</Box>
					{info}
				</Button>
				<Collapse in={open}>{children}</Collapse>
			</ListItem>
		);
	}

	// Leaf
	return (
		<ListItem
			disableGutters
			sx={{
				display: 'flex',
				py: 0
			}}
		>
			<Button
				startIcon={icon}
				sx={{
					color: 'text.secondary',
					fontWeight: 'fontWeightMedium',
					justifyContent: 'flex-start',
					textAlign: 'left',
					pl: `${paddingLeft}px`,
					pr: '8px',
					py: '12px',
					textTransform: 'none',
					width: '100%',
					...(active && {
						color: 'primary.main',
						fontWeight: 'fontWeightBold',
						'& svg': {
							color: 'primary.main'
						}
					})
				}}
				variant={'text'}
				onClick={handleToggle}
			>
				<Box sx={{ flexGrow: 1 }}>{title}</Box>
				{info}
			</Button>
		</ListItem>
	);
};
