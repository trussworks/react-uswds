module.exports = {
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/example/'],
  testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '^react$': '<rootDir>/node_modules/react',
    '\\.svg\\?svgr$': '<rootDir>/__mocks__/svgrMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|svg|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  coverageThreshold: {
    global: {
      statements: 96,
      branches: 87,
      functions: 94,
      lines: 96,
    },
  },
}
