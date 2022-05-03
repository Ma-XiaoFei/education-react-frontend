import React, { memo, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = memo(() => {
	return (
		<div>
			<div>
				<button onClick={()=> {
					localStorage.removeItem('token');
				}}>logout</button>
			</div>
			<div>
				<NavLink to={'/'}>home</NavLink>
				<NavLink to={'/about'}>about</NavLink>
			</div>
			<div>{<Outlet />}</div>
		</div>
	);
});

export default Layout;
