import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes.jsx'
import ThemeProvider from './Context/ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={Routes}></RouterProvider>
    </ThemeProvider>
  </StrictMode>,
)
