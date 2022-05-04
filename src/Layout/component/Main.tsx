import { Layout } from 'antd';
import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';
const { Content } = Layout;

const Main = memo(() => {
	return (
		<Content
			className="site-layout-background"
			style={{
				margin: 24,
				padding: 16,
				minHeight: 280,
			}}
		>
			<Outlet/>
		</Content>
	);
});

export default Main;
