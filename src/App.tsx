import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, RouteObject, useRoutes } from 'react-router-dom';
import router from '@/router';
import { Spin,Modal } from 'antd';

function App() {
	const [ routes, setRoutes ] = useState<RouteObject[]>([
		{
			path: '*',
			element: (
				<div id="spin-loading">
					<Spin size="large"></Spin>
				</div>
			)
		}
	]);
	const route = useRoutes(routes);
	useEffect(() => {
		setTimeout(() => {
			setRoutes(router);
		}, 1000);
	}, []);

	return (
		<div>
			{route}
		</div>
	);
}

export default App;
