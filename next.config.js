const sourcebit = require('sourcebit');
const sourcebitConfig = require('./sourcebit.js');
const withPWA = require('@ducanh2912/next-pwa').default({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development'
});

sourcebit.fetch(sourcebitConfig);

module.exports = withPWA({
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    webpack: (config, { webpack }) => {
        // Tell webpack to ignore watching content files in the content folder.
        // Otherwise webpack receompiles the app and refreshes the whole page.
        // Instead, the src/pages/[...slug].js uses the "withRemoteDataUpdates"
        // function to update the content on the page without refreshing the
        // whole page
        config.plugins.push(new webpack.WatchIgnorePlugin({ paths: [/\/content\//] }));
        return config;
    }
});
