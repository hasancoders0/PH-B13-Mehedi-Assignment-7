import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft, HiOutlineExclamationCircle } from 'react-icons/hi'
import logo from '../assets/logo.png'

function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl rounded-3xl border border-[#E5E7EB] bg-white p-8 text-center shadow-sm md:p-12">
        <img
          src={logo}
          alt="KeenKeeper"
          className="mx-auto h-10 md:h-12"
        />

        <div className="mt-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EEF4F1] text-[#244D3F]">
            <HiOutlineExclamationCircle size={32} />
          </div>
        </div>

        <h1 className="mt-6 text-5xl font-bold tracking-tight text-[#1F2937] md:text-7xl">
          404
        </h1>

        <h2 className="mt-3 text-2xl font-semibold text-[#1F2937] md:text-3xl">
          Page not found
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#6B7280] md:text-base">
          The page you are looking for does not exist or may have been moved.
          Let’s get you back to a safe place.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-[#244D3F] px-5 py-3 text-sm font-medium text-white transition hover:opacity-95"
          >
            <HiOutlineArrowLeft size={18} />
            Back to Home
          </Link>

          <Link
            to="/timeline"
            className="inline-flex items-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-5 py-3 text-sm font-medium text-[#1F2937] transition hover:bg-gray-50"
          >
            Go to Timeline
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFound