import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageRoutes } from 'entities/pages'

const HomePage = lazy(() => import('./home'))

export default function Routing() {
  return (
    <Routes>
      <Route path={PageRoutes.Home} element={<HomePage />} />
    </Routes>
  )
}
