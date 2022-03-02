module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@components": "./src/components/",
          "@screens": "./src/screens/",
          "@redux": "./src/redux/",
          "@constants": "./src/constants/",
          "@resources": "./src/resources/",
          "@routes": "./src/routes/",
          "@services": "./src/services/",
          "@theme": "./src/theme/",
          "@utils": "./src/utils/",
          "@src": "./src/",
        },
      },
    ],
  ],
};
