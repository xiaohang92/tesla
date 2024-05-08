const path = require("path");

module.exports = {
  webpack(config) {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https", // Protocol of the images you want to allow
        hostname: "images.unsplash.com", // Hostname of the domain
        // Optionally, you can also specify port and pathname for more precise control
      },
    ],
  },
};
