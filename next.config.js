const path = require("path");
// const withImages = require('next-images')

// next.config.js
const withCSS = require('@zeit/next-css')
module.exports = withCSS()

module.exports = {


  sassOptions: {
    includePaths: [path.join(__dirname, "src/assets/scss")],
    eslint: {
      // Warning: Dangerously allow production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  },

  images: {
    loader: "imgix",
    path: "",
    domains: ["links.papareact.com", "dungarestro.com.np",'img.etimg.com'],
  },

  
};

