import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <Link to="/" className="rounded-lg bg-black px-4 py-2 text-white">
        Back to Home
      </Link>
    </div>
  )
}

export default NotFound