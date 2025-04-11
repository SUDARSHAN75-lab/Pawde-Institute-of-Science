// craco.config.js
module.exports = {
    webpack: {
      configure: (webpackConfig, { env, paths }) => {
        // Custom Webpack configurations can go here
        // Example: Change dev server port
        webpackConfig.devServer = {
          ...webpackConfig.devServer,
          port: 3001,  // Change the port to 3001
          hot: true,   // Enable Hot Module Replacement
        };
        
        // You can add more custom configurations as needed here
        return webpackConfig;
      },
    },
  };
  