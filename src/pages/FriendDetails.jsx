import { useLoaderData } from 'react-router-dom'
import {
  HiOutlineClock,
  HiOutlineArchive,
  HiOutlineTrash,
  HiOutlinePhone,
  HiOutlineChatAlt2,
  HiOutlineVideoCamera,
} from 'react-icons/hi'

function FriendDetails() {
  const friend = useLoaderData()

  const statusStyles = {
    overdue: 'bg-[#EF4444] text-white',
    'almost due': 'bg-[#E7A93C] text-white',
    'on-track': 'bg-[#244D3F] text-white',
  }

  const formatStatus = (status) => {
    if (status === 'on-track') return 'On-Track'
    if (status === 'almost due') return 'Almost Due'
    return 'Overdue'
  }

  return (
    <section className="py-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left side */}
        <div className="lg:col-span-4">
          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
            <img
              src={friend.picture}
              alt={friend.name}
              className="h-24 w-24 rounded-full object-cover"
            />

            <h1 className="mt-4 text-2xl font-semibold text-[#1F2937]">
              {friend.name}
            </h1>

            <div className="mt-3">
              <span
                className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${statusStyles[friend.status]}`}
              >
                {formatStatus(friend.status)}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {friend.tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-[#DDF4E7] px-3 py-1 text-xs font-medium text-[#4B5563]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-5 text-sm leading-7 text-[#6B7280]">
              {friend.bio}
            </p>

            <p className="mt-4 text-sm text-[#374151]">
              <span className="font-medium">Preferred:</span> {friend.email}
            </p>

            <div className="mt-6 space-y-3">
              <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#E5E7EB] px-4 py-3 text-sm font-medium text-[#1F2937] transition hover:bg-gray-50">
                <HiOutlineClock size={18} />
                Snooze 2 Weeks
              </button>

              <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#E5E7EB] px-4 py-3 text-sm font-medium text-[#1F2937] transition hover:bg-gray-50">
                <HiOutlineArchive size={18} />
                Archive
              </button>

              <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#FECACA] px-4 py-3 text-sm font-medium text-[#DC2626] transition hover:bg-red-50">
                <HiOutlineTrash size={18} />
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="lg:col-span-8 space-y-6">
          {/* Stats cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
              <p className="text-3xl font-semibold text-[#1F2937]">
                {friend.days_since_contact}
              </p>
              <p className="mt-2 text-sm text-[#6B7280]">Days Since Contact</p>
            </div>

            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
              <p className="text-3xl font-semibold text-[#1F2937]">
                {friend.goal}
              </p>
              <p className="mt-2 text-sm text-[#6B7280]">Goal (Days)</p>
            </div>

            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
              <p className="text-lg font-semibold text-[#1F2937]">
                {friend.next_due_date}
              </p>
              <p className="mt-2 text-sm text-[#6B7280]">Next Due</p>
            </div>
          </div>

          {/* Relationship goal */}
          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-[#1F2937]">
                Relationship Goal
              </h2>

              <button className="rounded-lg border border-[#E5E7EB] px-4 py-2 text-sm font-medium text-[#1F2937] hover:bg-gray-50">
                Edit
              </button>
            </div>

            <p className="mt-4 text-sm text-[#374151]">
              Connect every {friend.goal} days
            </p>
          </div>

          {/* Quick check-in */}
          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-[#1F2937]">
              Quick Check-In
            </h2>

            <div className="mt-5 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-xl bg-[#244D3F] px-4 py-3 text-sm font-medium text-white">
                <HiOutlinePhone size={18} />
                Call
              </button>

              <button className="inline-flex items-center gap-2 rounded-xl bg-[#244D3F] px-4 py-3 text-sm font-medium text-white">
                <HiOutlineChatAlt2 size={18} />
                Text
              </button>

              <button className="inline-flex items-center gap-2 rounded-xl bg-[#244D3F] px-4 py-3 text-sm font-medium text-white">
                <HiOutlineVideoCamera size={18} />
                Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FriendDetails