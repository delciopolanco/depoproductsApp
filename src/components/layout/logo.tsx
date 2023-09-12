import webLogo from '@images/logo.svg';
import { experimentalStyled, SxProps, Theme } from '@mui/material';
import { FC } from 'react';

type LogoProps = {
	sx?: SxProps<Theme>;
};

const LogoRoot = experimentalStyled('div')(() => ({
	width: '100%',
	height: '100%'
}));

export const Logo: FC<LogoProps> = ({ sx }) => {
	return (
		<LogoRoot sx={sx}>
			<img src={webLogo} alt={'logo'} />
		</LogoRoot>
	);
};
