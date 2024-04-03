module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@actions': './src/actions',
          '@assets': './src/assets',
          '@components': './src/components',
          '@models': './src/models',
          '@pages': './src/pages',
          '@reducers': './src/reducers',
          '@services': './src/services',
          '@support': './src/support',
          '@utils': './src/utils',
        },
      },
    ],
  ],
}
