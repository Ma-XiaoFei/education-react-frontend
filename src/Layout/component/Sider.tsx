import React, { memo, useCallback, useMemo, useState } from 'react';
import { Layout, Menu } from 'antd';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	UserOutlined,
} from '@ant-design/icons';
import routes from '@/router/routerMap';
import { useNavigate, useLocation } from 'react-router-dom';

const { Sider } = Layout;

function deepMenuItems(r: typeof routes | []) {
	if (!r) return [];
	const arr: ItemType[] = [];
	r.forEach((t) => {
		if (t.menu || t.subMenu) {
			arr.push({
				key: '' + (t.path||'/'),
				icon: <i className={`iconfont ${t.icon}`}></i>,
				label: t.title,
			});
		}
		if (t.children) {
			arr.push(...deepMenuItems(t.children));
		}
	});
	return arr;
}

const SiderComponent = memo(() => {
	const navigate = useNavigate();
	const location = useLocation();
	const [ collapsed, setCollapsed ] = useState(false);

	const menuItems = useMemo(() => {
		const rootRoute = routes.find((t) => t.path === '/');
		if (rootRoute) {
			return deepMenuItems([ rootRoute ]);
		} else {
			return [];
		}
	}, []);

	const toggle = useCallback(() => {
		setCollapsed(!collapsed);
	}, [ collapsed ]);

	return (
		<Sider
			width={220}
			theme="light"
			trigger={null}
			collapsible
			collapsed={collapsed}
		>
			<div className="flex-space">
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
				selectedKeys={[ location.pathname ]}
				items={menuItems}
				onClick={({ key }) => navigate(key)}
			/>
		</Sider>
	);
});

export default SiderComponent;
