import React, { memo } from 'react';
import { Layout, Space } from 'antd';
const { Header } = Layout;

const HeaderComponent = memo(() => {
	return (
		<Header className="layout-header" style={{ padding: 0 }}>
			<div className="user-box">
				<Space size={20}>
					<span>
						<i className="iconfont icon-user"></i>zhang
					</span>
					<span>
						<i className="iconfont icon-lock"></i>Change password
					</span>
					<span>
						<i className="iconfont icon-poweroff"></i>Exit
					</span>
				</Space>
			</div>
		</Header>
	);
});

export default HeaderComponent;
