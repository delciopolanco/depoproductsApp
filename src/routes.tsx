import { InternalLayout, Loading, MainLayout } from '@components';
import { loadable } from 'react-lazily/loadable';
import { RouteObject } from 'react-router-dom';
import { AuthGuard, PATHS } from '@shared';
import { Suspense } from 'react';

const loadingFallback = { fallback: <Loading /> };

const { ProductSearch, Login } = loadable(async () => await import('@pages'), loadingFallback);

const routes: RouteObject[] = [
	{
		path: '',
		element: (
			<Suspense fallback={<Loading />}>
				<Login />
			</Suspense>
		)
	},
	{
		path: PATHS.login,
		element: (
			<Suspense fallback={<Loading />}>
				<Login />
			</Suspense>
		)
	},
	{
		path: PATHS.search,
		element: (
			<Suspense fallback={<Loading />}>
				<AuthGuard>
					<InternalLayout />
				</AuthGuard>
			</Suspense>
		),
		children: [
			{
				path: PATHS.search,
				element: (
					<Suspense fallback={<Loading />}>
						<ProductSearch />
					</Suspense>
				)
			}
		]
	},
	{
		path: `/*`,
		element: (
			<Suspense fallback={<Loading />}>
				<MainLayout />
			</Suspense>
		),
		children: [
			{
				path: `/*/`,
				element: (
					<Suspense fallback={<Loading />}>
						<Login />
					</Suspense>
				)
			},
			{
				path: `404`,
				element: (
					<Suspense fallback={<Loading />}>
						<Login />
					</Suspense>
				)
			},
			{
				path: `*`,
				element: (
					<Suspense fallback={<Loading />}>
						<Login />
					</Suspense>
				)
			}
		]
	}
];

export default routes;
