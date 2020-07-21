module.exports = {
  devServer: {
    proxy: {
      "http://zipcloud.ibsnet.co.jp/api/": {
        target: "http://localhost:8080",
      }
    }
  }
};
