module.exports = {
    modulePaths: ['/shared/vendor/modules'],
    moduleFileExtensions: ['js', 'jsx'],
    moduleDirectories: ['node_modules', 'bower_components', 'shared'],
  
    moduleNameMapper: {
      '\\.(css|less)$': '<rootDir>/_mocks_/styleMock.js',
      '\\.(gif|ttf|eot|svg)$': '<rootDir>/_mocks_/fileMock.js',
  
    },
  };