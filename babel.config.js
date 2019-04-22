module.exports = {
  presets: [
    [
      "@babel/env",
      {
        modules: false,
        useBuiltIns: "usage",
        corejs: 2
      }
    ],
    "@babel/react"
  ]
};
