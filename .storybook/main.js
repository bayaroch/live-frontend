const path = require('path')
const resolve = (dir) => path.resolve(process.cwd(), dir)
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    config.resolve.modules = [resolve('../src'), 'node_modules']
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': resolve('./src/components'),
      '@containers': resolve('./src/containers'),
      '@css': resolve('./src/css'),
      '@store': resolve('./src/store'),
      '@constants': resolve('./src/constants'),
      '@services': resolve('./src/services'),
      '@utils': resolve('./src/utils'),
      '@theme': resolve('./src/theme'),
    }
    return config
  },
}
