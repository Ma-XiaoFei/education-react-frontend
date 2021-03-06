import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
	plugins: [
		react({
			babel: {
				plugins: [
					[ 'import', {
						libraryName: 'antd',
						libraryDirectory: 'es',
						style: true
					} ]
				]
			}
		}),
	],
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
				modifyVars:{
					'@primary-color': '#225AF9',
					'@layout-header-background': '#FFF'
				},
			}
		}
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
		extensions: [ '.js', '.ts', '.jsx', '.tsx', '.json' ]
	},
});
