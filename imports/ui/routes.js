import React, { lazy } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import Layout from './components/layout'
import LoginComp from './composites/login'
import RegisterComp from './composites/register'
import HomeComp from './composites/home'

// import UsersComp from './composites/users'
const UsersComp = lazy(() => import('./composites/users'))

Meteor.startup(function renderRoutes () {
  const container = document.createElement('div')

  container.id = 'app'

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<Layout />}>
          <Route path='/' element={<HomeComp />} />
          <Route path='/users' element={<UsersComp />} />
        </Route>
        <Route path='login' element={<LoginComp />} />
        <Route path='register' element={<RegisterComp />} />
      </>
    )
  )

  createRoot(container).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )

  document.body.prepend(container)
})
