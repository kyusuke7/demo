module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/demo/dist/'   //任意
    : '/hogehoge',
  runtimeCompiler: true
}

