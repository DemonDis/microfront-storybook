// module.exports = {
//   "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
//   "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
//   "framework": "@storybook/react",
//   core: {
//     builder: "webpack5"
//   }
// };


const {
  withStorybookModuleFederation,
} = require('storybook-module-federation');
const path = require('path');
const webpack = require('webpack'); //to access built-in plugins

const storybookConfig = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", '@storybook/preset-scss'],
  framework: "@storybook/react",
  core: {
    builder: 'webpack5',
  },
};

const moduleFederationConfig = {
  name: 'components',
  filename: 'remoteEntry.js',
  remotes: {
    story_remote: "story_remote@http://localhost:9002/remoteEntry.js",
  },
  shared: {
    react: {
      singleton: true,
      requiredVersion: false,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: false,
    },
  },
};

module.exports = withStorybookModuleFederation(moduleFederationConfig)(
  storybookConfig
);