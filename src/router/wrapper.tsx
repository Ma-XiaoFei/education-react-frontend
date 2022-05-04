import React, { ReactElement, Suspense } from 'react';
import { Spin } from 'antd';
import RequireAuth from '@/component/RequireAuth';

export default (f: ReactElement, noRequire?: boolean) => {
	return (
		<Suspense
			fallback={
				<div id="spin-loading">
					<Spin size="large" />
				</div>
			}
		>
			{noRequire ? f : <RequireAuth>{f}</RequireAuth>}
		</Suspense>
	);
};
