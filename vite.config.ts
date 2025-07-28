import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
	plugins: [
		vue({
			template: {
				compilerOptions: {
					isCustomElement: (tag) => tag.includes('-'),
				},
			},
		}),
	],
	root: 'example',
	build: {
		lib: {
			name: 'MapClient',
			entry: '../src/polar-client.ts',
			fileName: () => 'polar-client.js',
		},
		rollupOptions: {
			output: {
				assetFileNames: (assetInfo) =>
					assetInfo.name === 'style.css' ? 'polar-client.css' : assetInfo.name,
			},
		},
	},
	server: {
		port: 1234,
	},
})
