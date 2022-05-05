import React, { memo } from 'react';
import { Layout, Space } from 'antd';
const { Header } = Layout;

const HeaderComponent = memo(() => {
	return (
		<Header className="layout-header" style={{ padding: 0 }}>
			<div className="user-box">
				<Space size={20}>
					<span>
						<i className="iconfont icon-user"></i>张同学
					</span>
					<span>
						<i className="iconfont icon-lock"></i>修改密码
					</span>
					<span>
						<i className="iconfont icon-poweroff"></i>退出
					</span>
				</Space>
			</div>
		</Header>
	);
});

export default HeaderComponent;
