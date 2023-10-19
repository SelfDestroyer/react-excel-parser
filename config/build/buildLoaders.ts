import type webpack from "webpack";
import { type IBuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { buildFileLoader } from "./loaders/buildFileLoader";
import { buildBabelLoader } from "./loaders/buildBabelLoader";
import { buildSvgLoader } from "./loaders/buildSvgLoader";
import { buildTypeScriptLoader } from "./loaders/buildTypeScriptLoader";

export function buildLoaders({ isDev }: IBuildOptions): webpack.RuleSetRule[] {
  const fileLoader = buildFileLoader();
  const babelLoader = buildBabelLoader();
  const svgLoader = buildSvgLoader();
  const cssLoader = buildCssLoader(isDev);
  const typeScriptLoader = buildTypeScriptLoader();

  return [svgLoader, fileLoader, babelLoader, typeScriptLoader, cssLoader];
}
