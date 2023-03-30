const { mergeWithRules } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
const path = require("path");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "marcXandre",
    projectName: "styleguide",
    webpackConfigEnv,
    argv,
  });

  const config = mergeWithRules({
    module: {
      rules: {
        test: "match",
        use: "replace",
      },
    },
  })(defaultConfig, {
    // customize the webpack config here
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            require.resolve("style-loader", {
              paths: [require.resolve("webpack-config-single-spa")],
            }),
            require.resolve("css-loader", {
              paths: [require.resolve("webpack-config-single-spa")],
            }),
            "postcss-loader",
          ],
        },
      ],
    },
  });

  return config;
};
