/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')([
	'@ionic/react',
	'@ionic/core',
	'@stencil/core',
	'ionicons',
])

const nextConfig = {
	reactStrictMode: true,
	output: 'export',
	images: {
		loader: 'custom',
		loaderFile: './my-loader.ts',
	},
}

module.exports = withTM(nextConfig)
