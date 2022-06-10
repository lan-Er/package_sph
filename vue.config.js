module.exports = {
  productionSourceMap:false,
  // 关闭ESLINT
  lintOnSave: false,
  //配置代理跨域
  devServer: {
    proxy: {
      "/api": {
        //target: "http://39.98.123.211",
        target: "http://gmall-h5-api.atguigu.cn",
      },
    },
  },
};
