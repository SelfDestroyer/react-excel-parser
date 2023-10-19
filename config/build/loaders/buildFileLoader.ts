import type webpack from 'webpack'

export const buildFileLoader = (): webpack.RuleSetRule => {
  return {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i, loader: 'file-loader'
  }
}
