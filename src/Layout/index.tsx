import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import './index.less';
// import { NavLink, Outlet } from 'react-router-dom';
import Header from './component/Header';
import Main from './component/Main';
import Sider from './component/Sider';

// const Layout = memo(() => {
// 	return (
// 		<div>
// 			<div>
// 				<button onClick={()=> {
// 					localStorage.removeItem('token');
// 				}}>logout</button>
// 			</div>
// 			<div>
// 				<NavLink to={'/'}>home</NavLink>
// 				<NavLink to={'/about'}>about</NavLink>
// 			</div>
// 			<div>{<Outlet />}</div>
// 		</div>
// 	);
// });

// export default Layout;

import { Layout, Menu, Space } from 'antd';


const LayoutComponent = memo(() => {

	return (
		<Layout id="layout-component">
			<Sider></Sider>
			<Layout className="site-layout">
				<Header/>
				<Main/>
			</Layout>
		</Layout>
	);
});

export default LayoutComponent;
