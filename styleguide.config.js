const path = require("path");
module.exports = {
  ignore: [
    "**/components/**/*.test.js",
    "**/components/**/index.js",
    "**/components/Form/FormField.js"
  ],
  usageMode: "expand",
  require: [path.join(__dirname, "./src/App.scss")]
//   ,
//   webpackConfig: require("react-scripts/config/webpack.config")(
//     "development"
//   ) /** Workaround - https://github.com/styleguidist/react-styleguidist/issues/1247 */
};