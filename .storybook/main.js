/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/experimental-addon-test'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  }
}
export default config
