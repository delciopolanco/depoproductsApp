import { Link, Box } from '@mui/material';
import { FC } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';

type BackProps = {
	backText: string;
	backIcon?: React.ReactNode;
	to?: string;
};

export const Back: FC<BackProps> = ({ backText, backIcon, to }) => {
	const navigate = useNavigate();

	const onClickHandler = () => {
		if (!to) {
			navigate(-1);
		} else {
			navigate(to);
		}
	};

	return (
		<Link
			color={'primary'}
			underline={'none'}
			component={'a'}
			onClick={onClickHandler}
			sx={{
				display: 'flex',
				alignItems: 'center',
				cursor: 'pointer',
				fontWeight: 600
			}}
		>
			{backIcon || <KeyboardBackspaceIcon fontSize={'small'} />}
			<Box ml={2}>{backText}</Box>
		</Link>
	);
};
