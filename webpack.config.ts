import path from 'path'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { type IBuildEnv, type IBuildPaths } from './config/build/types/config'
import type webpack from 'webpack'

export default (env: IBuildEnv): webpack.Configuration => {
  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }

  const mode = env.mode ?? 'development'

  const PORT = env.port ?? 3000
  const isDev = mode === 'development'

  return buildWebpackConfig({
    mode, paths, isDev, port: PORT
  })
}
