const path = require("path");
module.exports = {
  ignore: [
    "**/components/**/*.test.js",
    "**/components/**/index.js",
    "**/components/form/FormField.js"
  ],
  usageMode: "expand",
  require: [path.join(__dirname, "./src/App.scss")],
  styleguideDir: "public"
};
