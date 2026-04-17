import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import router from './routes/Routes'
import TimelineProvider from './context/TimelineContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TimelineProvider>
      <RouterProvider router={router} />
    </TimelineProvider>
  </React.StrictMode>
)