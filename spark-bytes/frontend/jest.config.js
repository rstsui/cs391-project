// jest.config.js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
