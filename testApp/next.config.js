/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, options) => {
        config.module.rules.push({
          test: /\.html$/,
          use: [
            options.defaultLoaders.babel,
            {
              loader: 'html-loader',
            },
          ],
        })
        
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        });

        return config
    },
}

module.exports = nextConfig
