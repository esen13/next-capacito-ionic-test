/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')([
    '@ionic/react',
    '@ionic/core',
    '@stencil/core',
    'ionicons'
]);

const nextConfig = {
  reactStrictMode: true,
  output: 'export'
}

module.exports = withTM(nextConfig)
