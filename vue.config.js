const vuxLoader = require('vux-loader')

module.exports = {
    configureWebpack: config => {
        vuxLoader.merge(config, {
            plugins: ['vux-ui']
        })
    },
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/vue/'
        : '/'
}