import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes.jsx'
import ThemeProvider from './Context/ThemeProvider.jsx'
import AuthProvider from './Context/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import SignalProvider from './Context/SignalProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SignalProvider>
      <AuthProvider>
        <ThemeProvider>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
          <RouterProvider router={Routes}></RouterProvider>
        </ThemeProvider>
      </AuthProvider>
    </SignalProvider>
  </StrictMode>,
)
