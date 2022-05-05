import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

function RequireAuth({ children }: { children: JSX.Element }) {
	const location = useLocation();
	// if (!localStorage.getItem('token')) {
	// 	return <Navigate to="/login" state={{ from: location }} replace />;
	// }

	return children;
}

export default RequireAuth;
