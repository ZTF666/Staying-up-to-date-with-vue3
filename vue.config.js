module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    },
    devServer: {
        proxy: {
          '^/api': {
            target: 'http://localhost:5000',
            changeOrigin: true,
            logLevel: 'debug',
            pathRewrite: { '^/api': '/' },
          },
        },
      },
  
}
