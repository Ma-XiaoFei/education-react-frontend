import React, { ReactElement } from 'react';
import wrapper from './wrapper';

import NotFound from '@/pages/Error/404';
import Layout from '@/Layout';
import Login from '@/pages/Login';
//Student角色
const StudentHome = React.lazy(() => import('@/pages/StudentHome'));
const AllCourse = React.lazy(() => import('@/pages/AllCourse'));
const StudentMyCourse = React.lazy(() => import('@/pages/StudentMyCourse'));
//协调员
const CourseManage = React.lazy(() => import('@/pages/CourseManage'));
const AccountManage = React.lazy(() => import('@/pages/AccountManage'));
const LecturerManage = React.lazy(() => import('@/pages/LecturerManage'));
const StudentManage = React.lazy(() => import('@/pages/StudentManage'));

// 讲师
const LecturerHome = React.lazy(() => import('@/pages/LecturerHome'));
const EndCourse = React.lazy(() => import('@/pages/EndCourse'));
const LecturerMyCourse = React.lazy(() => import('@/pages/LecturerMyCourse'));


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
			// {
			// 	menu: true,
			// 	title: 'Home Page Kanban',
			// 	index:true,
			// 	icon: 'icon-shouyekanban',
			// 	element: wrapper(<StudentHome />),
			// },
			{
				menu: true,
				title: 'Home Page Kanban',
				index:true,
				icon: 'icon-shouyekanban',
				element: wrapper(<LecturerHome />),
			},
			{
				menu: true,
				icon: 'icon-quanbukecheng',
				title: 'All Courses',
				path: '/all-course',
				element: wrapper(<AllCourse />),
			},
			{
				menu: true,
				icon: 'icon-quanbukecheng',
				title: 'End of course',
				path: '/end-course',
				element: wrapper(<EndCourse />),
			},
			{
				menu: true,
				icon: 'icon-wodekecheng',
				title: 'My Courses',
				path: '/student-course',
				element: wrapper(<StudentMyCourse />),
			},
			{
				menu: true,
				icon: 'icon-wodekecheng',
				title: 'My Courses',
				path: '/lecturer-course',
				element: wrapper(<LecturerMyCourse />),
			},
			{
				menu: true,
				icon: 'icon-kechengguanli-gaoliang',
				title: 'Course Management',
				path: '/course-manage',
				element: wrapper(<CourseManage />),
			},
			{
				menu: true,
				icon: 'icon-zhanghaoguanli',
				title: 'Account Management',
				path: '/account-manage',
				element: wrapper(<AccountManage />),
			},
			{
				menu: true,
				icon: 'icon-jiangshiguanli',
				title: 'Lecturer Management',
				path: '/lecturer-manage',
				element: wrapper(<LecturerManage />),
			},
			{
				menu: true,
				icon: 'icon-xueshengguanli',
				title: 'Student Management',
				path: '/student-manage',
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
