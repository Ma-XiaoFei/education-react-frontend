import { Button, Col, Form, Input, Row } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React, { memo, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './index.less';

const Login: React.FC = memo(() => {
	const location: any = useLocation();
	const navigate = useNavigate();

	const handleLogin = useCallback(()=> {
		localStorage.setItem('token', 'xxx');
		navigate(location.state?.from ? location.state.from : '/');
	},[]);

	const inputStyle = { width: 320, height: 40 };

	return (
		<Row
			id="login-page"
			justify="space-between"
		>
			<Col flex={2}>
				<div className="img-bg"></div>
			</Col>
			<Col flex={1} style={{ minWidth: 400 }}>
				<div className="login-box">
					<div className="login-form">
						<h1>User Login</h1>
						<Form
							onFinish={handleLogin}>
							<Form.Item
								name="username"
								rules={[
									{ required: true, message: 'Please input your Username!' },
								]}
							>
								<Input
									style={inputStyle}
									prefix={<UserOutlined className="site-form-item-icon" />}
									placeholder="Username"
								/>
							</Form.Item>
							<Form.Item
								name="password"
								rules={[
									{ required: true, message: 'Please input your Password!' },
								]}
							>
								<Input
									style={inputStyle}
									prefix={<LockOutlined className="site-form-item-icon" />}
									type="password"
									placeholder="Password"
								/>
							</Form.Item>
							<Form.Item>
								<Button
									htmlType='submit'
									style={inputStyle}
									type="primary"
								>
                                   Login
								</Button>
							</Form.Item>
							<Form.Item style={{ textAlign: 'right' }}>
								<a>Captcha Login</a>
							</Form.Item>
						</Form>
					</div>
				</div>
			</Col>
		</Row>
	);
});

export default Login;
