const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  resetModules: true,
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@/mocks/(.*)$": "<rootDir>/src/__mocks__/$1",
    "^@/atoms/(.*)$": "<rootDir>/src/atoms/$1",
    "^@/theme/(.*)$": "<rootDir>/src/theme/$1",
    "\\.(css|svg)$": "identity-obj-proxy",
  },
  testEnvironment: "jest-environment-jsdom",
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
