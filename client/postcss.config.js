module.exports = {
  parser: 'postcss-scss',
  plugins: [
    require('postcss-advanced-variables'),
    require('postcss-nested'),
    require('postcss-nesting'),
    require('postcss-extend'),
    require('postcss-flexbugs-fixes'),
    require('autoprefixer')({
      browsers: ['>1%', 'last 2 versions', 'Firefox ESR', 'not ie < 11'],
      flexbox: 'no-2009',
    }),
  ],
};
