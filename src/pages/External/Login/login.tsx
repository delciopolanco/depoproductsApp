import { Button, FeatureWrapper, Input, Logo } from '@components';
import { Box, Container, experimentalStyled, FormControl, Typography } from '@mui/material';
import { FC } from 'react';
import office from '@images/office.avif';
import { Formik, FormikValues } from 'formik';
import { useRecoilState } from 'recoil';
import { AuthSelector, PATHS } from '@shared';
import { useNavigate } from 'react-router-dom';

type PropsLogin = {
	url?: string;
};

const LoginRoot = experimentalStyled('form')(({ theme }) => ({
	backgroundColorL: theme.palette.background.default,
	display: 'grid',
	gridTemplateColumns: '2fr 1fr',
	justifyContent: 'center',
	minHeight: '100vh',
	'& .form': {},
	[theme.breakpoints.down('md')]: {
		gridTemplateColumns: '2fr',
		'& .image': {
			display: 'none'
		}
	}
}));

const Image = experimentalStyled('div')(() => ({
	width: '100%',
	height: '100%',
	backgroundImage: `url(${office})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover'
}));

export const Login: FC<PropsLogin> = () => {
	const [_, setAuth] = useRecoilState(AuthSelector);
	const navigate = useNavigate();

	const onSubmit = (v: FormikValues) => {
		setAuth({
			isAuthenticated: true,
			user: { name: 'Juana Mendez', jobRole: 'Auxiliar de Recursos Humanos' }
		});
		navigate(PATHS.search);
	};

	return (
		<Formik
			initialValues={{
				username: '',
				password: ''
			}}
			onSubmit={onSubmit}
		>
			{({ submitForm }) => {
				return (
					<LoginRoot>
						<Image className={'image'} />
						<Box className={'form'}>
							<Container sx={{ pt: { md: 20, xs: 10 } }}>
								<Box
									sx={{
										display: 'grid',
										gridTemplateColumns: '1fr',
										gap: 5,
										justifyContent: 'center',
										p: 5
									}}
								>
									<Box justifyContent={'center'} display={'flex'}>
										<Logo
											sx={{
												color: 'text.secondary',
												width: 200,
												height: 100,
												display: 'flex',
												justifyContent: 'center'
											}}
										/>
									</Box>
									<FeatureWrapper
										sx={{
											display: 'grid',
											gridTemplateColumns: '1fr',
											gap: '1rem',
											p: 5
										}}
									>
										<Typography variant={'h4'} color={'primary.main'} textAlign={'center'}>
											Inicio de sesión
										</Typography>
										<FormControl>
											<Input name={'username'} label={'Usuario'} variant={'standard'} fullWidth />
										</FormControl>
										<FormControl>
											<Input
												name={'password'}
												type={'password'}
												variant={'standard'}
												label={'Contraseña'}
												fullWidth
											/>
										</FormControl>
										<Button onClick={() => submitForm()} sx={{ mt: 3 }} variant={'contained'}>
											Iniciar
										</Button>
									</FeatureWrapper>
								</Box>
							</Container>
						</Box>
					</LoginRoot>
				);
			}}
		</Formik>
	);
};
