const baseConfig = require('./jest.config');

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
  ...baseConfig,
  rootDir: '.',
  testMatch: ['<rootDir>/apps/**/test/**/*.e2e-spec.ts'],
};
