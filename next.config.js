/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['github.com/gilbertoaleite.png']
  },
  i18n,
  webpack: {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });
    }
  }
};

module.exports = nextConfig