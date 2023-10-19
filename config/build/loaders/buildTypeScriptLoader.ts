import type webpack from "webpack";

export const buildTypeScriptLoader = (): webpack.RuleSetRule => {
  return {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/
  };
};
