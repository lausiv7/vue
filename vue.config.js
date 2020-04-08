module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
              ? '/githubPageTest/'
              : '/'
  outputdir: 'docs'
}
