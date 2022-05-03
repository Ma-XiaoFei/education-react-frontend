import React, { ReactElement, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import { Spin } from 'antd';
import RequireAuth from '@/component/RequireAuth';

import NotFound from '@/pages/Error/404';
import Layout from '@/Layout';
import Login from '@/pages/Login';
const Home = React.lazy(() => import('@/pages/Home'));
const About = React.lazy(() => import('@/pages/About'));

const wrapper = (f: ReactElement, noRequire?: boolean) => {
	console.log(111);
	return (
		<Suspense
			fallback={
				<div id="spin-loading">
					<Spin size="large" />
				</div>
			}
		>
			{noRequire ? f : <RequireAuth>{f}</RequireAuth>}
		</Suspense>
	);
};

const routes: RouteObject[] = [
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/',
		element: <Layout/>,
		children: [
			{ index: true, element: wrapper(<Home />) },
			{ path: 'about', element: wrapper(<About />) },
			{ path: '/lp' },
		],
	},
	{
		path: '*',
		element: <NotFound />,
	},
];
export default routes;
