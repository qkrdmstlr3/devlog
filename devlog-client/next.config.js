// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  compress: true,
  pageExtensions: ['tsx'],
  webpack(config) {
    let prod = process.env.NODE_ENV === 'production';
    return {
      ...config,
      node: {
        fs: 'empty',
      },
      mode: prod ? 'production' : 'development',
      devtool: prod ? 'hidden-source-map' : 'eval',
    };
  },
});
