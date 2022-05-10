const { i18n } = require('./next-i18next.config')


/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["github.com"]
	},
  reactStrictMode: true,
	webpack(config) {
		config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
	},
	i18n
}

module.exports = nextConfig
