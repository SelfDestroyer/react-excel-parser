import { type RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'

export enum AppRouter {
  MAIN = 'main',
}

export const RoutePath: Record<AppRouter, string> = {
  [AppRouter.MAIN]: '*',
}

export const routeConfig: Record<AppRouter, RouteProps> = {
  [AppRouter.MAIN]: {
    path: RoutePath.main,
    element: <MainPage/>
  },
}
