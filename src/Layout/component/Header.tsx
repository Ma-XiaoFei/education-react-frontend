import React, { memo } from 'react';
import { Layout, Space } from 'antd';
const { Header } = Layout;

const HeaderComponent = memo(() => {
	return (
		<Header className="layout-header" style={{ padding: 0 }}>
			<div className='user-box'>
				<Space>
					<span>张同学</span>
					<span>修改密码</span>
					<span>退出</span>
				</Space>
			</div>
		</Header>
	);
});

export default HeaderComponent;
