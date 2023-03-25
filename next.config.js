// next.config.js
module.exports = {
  // other configs...
  reactStrictMode: true,
  images: {
    domains: ['photo-zmp3.zmdcdn.me'],
  },
  // future: { webpack5: true }, // -- not needed since Next.js v11.0.0
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: {and: [/\.(js|ts|md)x?$/]},
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      // disable plugins
                      removeViewBox: false,
                    },
                  },
                },
              ],
            },
            titleProp: true,
          },
        },
      ],
    })
    return config
  },
}
