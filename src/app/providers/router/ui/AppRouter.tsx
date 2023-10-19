import { type JSX, type ReactNode } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter = (): ReactNode => (<Routes>
  {Object.values(routeConfig).map(({ element, path }) => (
    <Route element={<div className={'page-wrapper'}>{element}</div>} path={path} key={path}/>))}
</Routes>)

export default AppRouter
