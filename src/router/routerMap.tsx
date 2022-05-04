import React, { ReactElement } from 'react';
import wrapper from './wrapper';

import NotFound from '@/pages/Error/404';
import Layout from '@/Layout';
import Login from '@/pages/Login';
const Home = React.lazy(() => import('@/pages/Home'));
const AllCourse = React.lazy(() => import('@/pages/AllCourse'));
const MyCourse = React.lazy(() => import('@/pages/MyCourse'));

interface RoutesMap {
  index?: boolean;
  menu?: boolean;
  subMenu?: boolean;
  title?: string;
  path?: string;
  element: ReactElement;
  children?: RoutesMap[];
}

const routes: RoutesMap[] = [
	{
		menu: false,
		title: '登录',
		path: '/login',
		element: <Login />,
	},
	{
		subMenu: false,
		path: '/',
		element: <Layout />,
		children: [
			{
				menu: true,
				title: '首页看板',
				index:true,
				element: wrapper(<Home />),
			},
			{
				menu: true,
				title: '全部课程',
				path: '/allCourse',
				element: wrapper(<AllCourse />),
			},
			{
				menu: true,
				title: '我的课程',
				path: '/myCourse',
				element: wrapper(<MyCourse />),
			},
		],
	},
	{
		menu: false,
		path: '*',
		element: <NotFound />,
	},
];

export default routes;
