import React from 'react'
import { createRoot } from 'react-dom/client'

import Router from './router'

Meteor.startup(function renderRoutes () {
  const app = document.getElementById('app')
  createRoot(app).render(<Router />)
})
