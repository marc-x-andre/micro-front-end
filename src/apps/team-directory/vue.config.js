const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    externals: ["com1"],
    output: {
      libraryTarget: "system",
    },
  },
});
