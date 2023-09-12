import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { FC, useState } from 'react';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

export interface Option {
	label: string;
	value: string;
}

type PropsLabelMenu = {
	options: Option[];
	label?: string;
};

export const LabelMenu: FC<PropsLabelMenu> = ({ options, label }) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [selectedOption, setSelectedOption] = useState<Option>(options[0]);
	const open = Boolean(anchorEl);

	const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, option: Option) => {
		setSelectedOption(option);
		setAnchorEl(null);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<IconButton onClick={handleClickListItem} aria-label="delete">
				<Typography variant={'body2'}>{`${label} : ${selectedOption.label}`}</Typography>
				<ExpandMoreOutlinedIcon fontSize={'small'} />
			</IconButton>
			<Menu
				id="lock-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'lock-button',
					role: 'listbox'
				}}
			>
				{options.map((option) => (
					<MenuItem
						key={option.value}
						selected={option === selectedOption}
						onClick={(event) => handleMenuItemClick(event, option)}
					>
						<Typography variant={'body2'}>{option.label}</Typography>
					</MenuItem>
				))}
			</Menu>
		</div>
	);
};
