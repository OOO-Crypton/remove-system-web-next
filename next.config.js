/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	optimizeFonts: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `http://${process.env.APP_URL}/api/:path*`,
			},
			{
				source: '/uploads/:path*',
				destination: `http://${process.env.APP_URL}/uploads/:path*`,
			},
		]
	},
}

module.exports = nextConfig
