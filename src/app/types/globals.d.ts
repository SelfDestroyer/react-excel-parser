type IClassNames = Record<string, string>;

declare module "*.css" {
  const classNames: IClassNames;
  export = classNames;
}

declare module "*.scss" {
  const classNames: IClassNames;
  export = classNames;
}
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg" {
  import type React from "react";
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const _IS_DEV_: boolean;
