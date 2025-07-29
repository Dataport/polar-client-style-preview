import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig(({ mode }) => ({
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
			fileName: 'polar-client',
		},
		outDir: '../dist',
		emptyOutDir: true,
		sourcemap: true,
	},
	server: {
		port: 1234,
		...(mode === 'core-development' ? {
			fs: {
				allow: [
					resolve(__dirname),
					resolve(__dirname, '..', 'polar'),
				],
			},
		} : {}),
	},
	...(mode === 'core-development' ? {
		resolve: {
			alias: {
				'@polar/polar/polar.css': resolve(__dirname, 'src', 'dev.css'),
				'@polar/polar': resolve(__dirname, '..', 'polar', 'src', 'core', 'index.ts'),
			},
		},
	} : {}),
}))
