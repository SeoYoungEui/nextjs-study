import type { Config } from 'jest'

const nextJest = require('next/jest')
const createJestConfig = nextJest({
  dir: './',
})
const customJestConfig: Config = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    html: '<html lang="zh-cmn-Hant"></html>',
    url: 'https://jestjs.io/',
    userAgent: 'Agent/007',
  },
}
module.exports = createJestConfig(customJestConfig)
