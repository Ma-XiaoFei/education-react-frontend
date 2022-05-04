import React, { ReactElement, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import routes from './routerMap';

const routeList: RouteObject[] = routes.map(t=> {
	const route = {
		...t
	};
	delete route.title;
	return {
		...route
	};
});
export default routeList;
