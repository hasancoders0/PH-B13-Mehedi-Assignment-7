import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MainLayout() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <main className="mx-auto max-w-7xl px-3 py-5 sm:px-4 md:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout