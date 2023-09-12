import { Login } from '@pages';
import { FC, ReactNode, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { AuthSelector } from '..';

interface AuthGuardProps {
	children: ReactNode;
}

export const AuthGuard: FC<AuthGuardProps> = (props) => {
	const { children } = props;
	const auth = useRecoilValue(AuthSelector);
	const location = useLocation();
	const [requestedLocation, setRequestedLocation] = useState('');

	if (!auth.isAuthenticated) {
		if (location.pathname !== requestedLocation) {
			setRequestedLocation(location.pathname);
		}

		return <Login url={requestedLocation} />;
	}

	// This is done so that in case the route changes by any chance through other
	// means between the moment of request and the render we navigate to the initially
	// requested route.
	if (requestedLocation && location.pathname !== requestedLocation) {
		setRequestedLocation('');
		return <Navigate to={requestedLocation} />;
	}

	return <>{children}</>;
};
