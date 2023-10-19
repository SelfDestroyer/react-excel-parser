import type webpack from 'webpack'

export const buildBabelLoader = (): webpack.RuleSetRule => {
  return {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  }
}
