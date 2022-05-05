import React, { ReactElement } from 'react';
import wrapper from './wrapper';

import NotFound from '@/pages/Error/404';
import Layout from '@/Layout';
import Login from '@/pages/Login';
const Home = React.lazy(() => import('@/pages/Home'));
const AllCourse = React.lazy(() => import('@/pages/AllCourse'));
const MyCourse = React.lazy(() => import('@/pages/MyCourse'));

const CourseManage = React.lazy(() => import('@/pages/CourseManage'));
const AccountManage = React.lazy(() => import('@/pages/AccountManage'));
const LecturerManage = React.lazy(() => import('@/pages/LecturerManage'));
const StudentManage = React.lazy(() => import('@/pages/StudentManage'));

interface RoutesMap {
  index?: boolean;
  menu?: boolean;
  icon?: string,
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
				icon: 'icon-shouyekanban',
				element: wrapper(<Home />),
			},
			{
				menu: true,
				icon: 'icon-quanbukecheng',
				title: '全部课程',
				path: '/allCourse',
				element: wrapper(<AllCourse />),
			},
			{
				menu: true,
				icon: 'icon-wodekecheng',
				title: '我的课程',
				path: '/myCourse',
				element: wrapper(<MyCourse />),
			},
			{
				menu: true,
				icon: 'icon-kechengguanli-gaoliang',
				title: '课程管理',
				path: '/courseManage',
				element: wrapper(<CourseManage />),
			},
			{
				menu: true,
				icon: 'icon-zhanghaoguanli',
				title: '账号管理',
				path: '/accountManage',
				element: wrapper(<AccountManage />),
			},
			{
				menu: true,
				icon: 'icon-jiangshiguanli',
				title: '讲师管理',
				path: '/lecturerManage',
				element: wrapper(<LecturerManage />),
			},
			{
				menu: true,
				icon: 'icon-xueshengguanli',
				title: '学生管理',
				path: '/studentManage',
				element: wrapper(<StudentManage />),
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
