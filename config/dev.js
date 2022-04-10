module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  mini: {},
  h5: {
    devServer: {
      disableHostCheck: true,
      proxy: {
        '/api/*': {
          target: 'https://6084086d9b2bed001704096b.mockapi.io/', // 后端地址
          changeOrigin: true,
        }
      }
    }
  }
}
