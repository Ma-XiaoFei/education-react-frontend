import React, { memo, useCallback, useState } from 'react';
import { Layout, Menu } from 'antd';
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const SiderComponent = memo(() => {
	const [ collapsed, setCollapsed ] = useState(false);

	const toggle = useCallback(() => {
		setCollapsed(!collapsed);
	}, [ collapsed ]);

	return (
		<Sider
			width={240}
			theme="light"
			trigger={null}
			collapsible
			collapsed={collapsed}
		>
			<div className='flex-space'>
				<div className="logo" />
				{React.createElement(
					collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
					{
						className: 'trigger',
						onClick: toggle,
					}
				)}
			</div>

			<Menu
				theme="light"
				mode="inline"
				defaultSelectedKeys={[ '1' ]}
				items={[
					{
						key: '1',
						icon: <UserOutlined />,
						label: 'nav 1',
					},
					{
						key: '2',
						icon: <VideoCameraOutlined />,
						label: 'nav 2',
					},
					{
						key: '3',
						icon: <UploadOutlined />,
						label: 'nav 3',
					},
				]}
			/>
		</Sider>
	);
});

export default SiderComponent;
