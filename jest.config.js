// https://facebook.github.io/jest/docs/en/configuration.html

'use strict';

module.exports = {
  preset: '@minna-ui/jest-config',
  collectCoverageFrom: [
    'src/**/*.{js,html}',
    '!src/index.js',
    '!src/jsonp.js', // not my code; just a modification of a package
  ],
  coverageDirectory: '<rootDir>/test/coverage',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
