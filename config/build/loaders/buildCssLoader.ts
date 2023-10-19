import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import type webpack from 'webpack'

export const buildCssLoader = (isDev: boolean): webpack.RuleSetRule => {
  return {
    test: /\.s[ac]ss$/i,
    use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (path: string) => Boolean(path.includes('.module.')),
            localIdentName: isDev ? '[path][name]__[local]-[hash:base64:5]' : '[hash:base64:8]'
          }
        }
      }, 'sass-loader']
  }
}
