module.exports = {
  testEnvironment: 'node', // or 'jsdom' for browser environment
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$', // specify test file patterns
  transform: {
    '^.+\\.(jsx?|tsx?)$': 'babel-jest', // use Babel for transforming JavaScript/TypeScript files
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'], // specify supported file extensions
};
