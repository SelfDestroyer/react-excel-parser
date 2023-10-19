import { render, type RenderResult } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { type ReactNode } from "react";

export interface ComponentRenderOptions {
  route?: string;
}
export function componentRender(
  component: ReactNode,
  options: ComponentRenderOptions = {}
): RenderResult {
  const { route = "/" } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>{component}</MemoryRouter>
  );
}
