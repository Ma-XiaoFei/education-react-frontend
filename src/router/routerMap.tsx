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
		title: 'Login',
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
				title: 'Home Page Kanban',
				index:true,
				icon: 'icon-shouyekanban',
				element: wrapper(<Home />),
			},
			{
				menu: true,
				icon: 'icon-quanbukecheng',
				title: 'All Courses',
				path: '/allCourse',
				element: wrapper(<AllCourse />),
			},
			{
				menu: true,
				icon: 'icon-wodekecheng',
				title: 'My Courses',
				path: '/myCourse',
				element: wrapper(<MyCourse />),
			},
			{
				menu: true,
				icon: 'icon-kechengguanli-gaoliang',
				title: 'Course Management',
				path: '/courseManage',
				element: wrapper(<CourseManage />),
			},
			{
				menu: true,
				icon: 'icon-zhanghaoguanli',
				title: 'Account Management',
				path: '/accountManage',
				element: wrapper(<AccountManage />),
			},
			{
				menu: true,
				icon: 'icon-jiangshiguanli',
				title: 'Lecturer Management',
				path: '/lecturerManage',
				element: wrapper(<LecturerManage />),
			},
			{
				menu: true,
				icon: 'icon-xueshengguanli',
				title: 'Student Management',
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
