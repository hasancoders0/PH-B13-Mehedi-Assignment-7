import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function MainLayout() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <main className="mx-auto max-w-7xl px-3 py-5 sm:px-4 md:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout