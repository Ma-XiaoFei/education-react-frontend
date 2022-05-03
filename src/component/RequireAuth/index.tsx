import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

function RequireAuth({ children }: { children: JSX.Element }) {
	console.log(9999);
	const location = useLocation();
	console.log(location);
	if (!localStorage.getItem('token')) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}
  
	return children;
}

export default RequireAuth;
