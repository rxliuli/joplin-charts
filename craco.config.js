const CracoEsbuildPlugin = require('craco-esbuild')

module.exports = function () {
  return {
    plugins: [
      {
        plugin: CracoEsbuildPlugin,
      },
    ],
  }
}
