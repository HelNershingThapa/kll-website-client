const path = require("path");
require("dotenv").config();

module.exports = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    IMAGE_URL: process.env.IMAGE_URL,
  },
  images: {
    domains: [
      "localhost",
      "salty-bastion-86199.herokuapp.com",
      "167.71.225.119",
      "api.kathmandulivinglabs.org",
      "kllsites.sgp1.cdn.digitaloceanspaces.com",
    ],
  },
  webpack: (config) => {
    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["public"] = path.join(__dirname, "public");
    config.resolve.alias["styles"] = path.join(__dirname, "styles");

    return config;
  },
};
