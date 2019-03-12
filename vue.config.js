var path = process.env.NODE_ENV === 'production' ? '/VueFeed/' : '/';

module.exports = {
  pwa: {
    name: 'VueFeed',
  },
  publicPath: path,
};
