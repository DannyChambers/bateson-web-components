const postcssGlobalData = require("@csstools/postcss-global-data");

const config = {
  plugins: [
    postcssGlobalData({
      files: ["./src/foundation/dimension/customMedia.css"],
    }),
    require("postcss-custom-media"),
  ],
};

module.exports = config;
