import React, { lazy } from 'react'
import { createRoot } from 'react-dom/client'
import {
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
} from 'react-router-dom'

import { history } from './history'

import LoginComp from './composites/login'
import RegisterComp from './composites/register'

import Layout from './components/layout'
import HomeComp from './composites/home'
const UsersComp = lazy(() => import('./composites/users'))

export default function Router () {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path='login' element={<LoginComp />} />
        <Route path='register' element={<RegisterComp />} />

        <Route element={<Layout />}>
          <Route path='/' element={<HomeComp />} />
          <Route path='/users' element={<UsersComp />} />
        </Route>
      </Routes>
    </HistoryRouter>
  )
}
