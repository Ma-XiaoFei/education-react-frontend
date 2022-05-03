import React, { memo } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

const Login: React.FC = memo(() => {
	const location: any = useLocation();
	const navigate = useNavigate();
	return (
		<div>
      login
			<div>
				<button
					onClick={() => {
						localStorage.setItem('token', 'xxx');
						navigate(location.state.from ? location.state.from : '/');
					}}
				>
          login
				</button>
			</div>
		</div>
	);
});

export default Login;
