import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Timeline from '../pages/Timeline'
import Stats from '../pages/Stats'
import NotFound from '../pages/NotFound'
import FriendDetails from '../pages/FriendDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          const res = await fetch('/friends.json')

          if (!res.ok) {
            throw new Error('Failed to load friends data')
          }

          return res.json()
        },
      },
      {
        path: 'friend/:id',
        element: <FriendDetails />,
        loader: async ({ params }) => {
          const res = await fetch('/friends.json')

          if (!res.ok) {
            throw new Error('Failed to load friend data')
          }

          const friends = await res.json()
          const friend = friends.find((item) => item.id === Number(params.id))

          if (!friend) {
            throw new Error('Friend not found')
          }

          return friend
        },
      },
      {
        path: 'timeline',
        element: <Timeline />,
      },
      {
        path: 'stats',
        element: <Stats />,
      },
    ],
  },
])

export default router