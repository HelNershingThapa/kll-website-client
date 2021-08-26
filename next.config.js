const path = require("path");

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["public"] = path.join(__dirname, "public");
    config.resolve.alias["styles"] = path.join(__dirname, "styles");

    return config;
  },
};
