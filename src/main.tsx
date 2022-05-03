import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import App from '@/App';
import './style/index.less';

const el = document.getElementById('root')!;

ReactDOM.createRoot(el).render(
	<ConfigProvider getPopupContainer={() => el}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ConfigProvider>
);
