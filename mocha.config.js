//Via: https://github.com/coryhouse/react-slingshot/blob/16ec28c9029bf7e2b65b26c22a1c2daadab427a2/tools/testSetup.js

// Tests are placed alongside files under test.
// This file does the following:
// 1. Sets the environment to 'production' so that
//    dev-specific babel config in .babelrc doesn't run.
// 2. Disables Webpack-specific features that Mocha doesn't understand.

// This assures the .babelrc dev config (which includes
// hot module reloading code) doesn't apply for tests.
process.env.NODE_ENV = 'production';

// Disable webpack-specific features for tests since
// Mocha doesn't know what to do with them.
require.extensions['.css'] = function () {
    return null;
};
require.extensions['.png'] = function () {
    return null;
};
require.extensions['.jpg'] = function () {
    return null;
};
