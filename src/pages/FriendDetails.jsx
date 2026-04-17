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

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  return (
    <section className="py-6 md:py-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[280px_1fr] md:items-start md:gap-5">
          {/* Left column */}
          <div className="space-y-3">
            <div className="rounded-2xl border border-[#E5E7EB] bg-white px-5 py-6 text-center shadow-sm">
              <img
                src={friend.picture}
                alt={friend.name}
                className="mx-auto h-20 w-20 rounded-full object-cover"
              />

              <h1 className="mt-4 text-[20px] font-semibold text-[#1F2937]">
                {friend.name}
              </h1>

              <div className="mt-3">
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-[10px] font-medium ${statusStyles[friend.status]}`}
                >
                  {formatStatus(friend.status)}
                </span>
              </div>

              <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                {friend.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-[#DDF4E7] px-2.5 py-1 text-[10px] font-medium uppercase text-[#4B5563]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-[14px] italic leading-7 text-[#6B7280]">
                "{friend.bio}"
              </p>

              <p className="mt-2 text-[13px] text-[#6B7280]">
                Preferred: email
              </p>
            </div>

            {/* Mobile action buttons in a row */}
            <div className="grid grid-cols-3 gap-2 md:grid-cols-1 md:gap-3">
              <button className="flex min-h-[52px] flex-col items-center justify-center gap-1 rounded-xl border border-[#E5E7EB] bg-white px-2 py-2 text-[12px] font-medium text-[#1F2937] shadow-sm transition hover:bg-gray-50 md:min-h-[48px] md:flex-row md:px-4 md:py-3 md:text-sm">
                <HiOutlineClock size={16} />
                <span className="text-center">Snooze</span>
              </button>

              <button className="flex min-h-[52px] flex-col items-center justify-center gap-1 rounded-xl border border-[#E5E7EB] bg-white px-2 py-2 text-[12px] font-medium text-[#1F2937] shadow-sm transition hover:bg-gray-50 md:min-h-[48px] md:flex-row md:px-4 md:py-3 md:text-sm">
                <HiOutlineArchive size={16} />
                <span className="text-center">Archive</span>
              </button>

              <button className="flex min-h-[52px] flex-col items-center justify-center gap-1 rounded-xl border border-[#E5E7EB] bg-white px-2 py-2 text-[12px] font-medium text-[#EF4444] shadow-sm transition hover:bg-red-50 md:min-h-[48px] md:flex-row md:px-4 md:py-3 md:text-sm">
                <HiOutlineTrash size={16} />
                <span className="text-center">Delete</span>
              </button>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            {/* Stats in one row on mobile */}
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              <div className="rounded-2xl border border-[#E5E7EB] bg-white px-2 py-4 text-center shadow-sm md:px-4 md:py-5">
                <h2 className="text-[20px] font-semibold text-[#244D3F] md:text-[24px]">
                  {friend.days_since_contact}
                </h2>
                <p className="mt-1 text-[11px] leading-4 text-[#6B7280] md:text-[12px]">
                  Days Since Contact
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5E7EB] bg-white px-2 py-4 text-center shadow-sm md:px-4 md:py-5">
                <h2 className="text-[20px] font-semibold text-[#244D3F] md:text-[24px]">
                  {friend.goal}
                </h2>
                <p className="mt-1 text-[11px] leading-4 text-[#6B7280] md:text-[12px]">
                  Goal (Days)
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5E7EB] bg-white px-2 py-4 text-center shadow-sm md:px-4 md:py-5">
                <h2 className="text-[15px] font-semibold text-[#244D3F] md:text-[24px]">
                  {formatDate(friend.next_due_date)}
                </h2>
                <p className="mt-1 text-[11px] leading-4 text-[#6B7280] md:text-[12px]">
                  Next Due
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#E5E7EB] bg-white px-4 py-5 shadow-sm md:px-5">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-[15px] font-medium text-[#1F2937]">
                  Relationship Goal
                </h2>

                <button className="rounded-md border border-[#E5E7EB] bg-[#F8FAFC] px-3 py-1.5 text-[12px] text-[#374151]">
                  Edit
                </button>
              </div>

              <p className="mt-4 text-[14px] text-[#374151]">
                Connect every <span className="font-semibold">{friend.goal} days</span>
              </p>
            </div>

            <div className="rounded-2xl border border-[#E5E7EB] bg-white px-4 py-5 shadow-sm md:px-5">
              <h2 className="text-[15px] font-medium text-[#1F2937]">
                Quick Check-In
              </h2>

              <div className="mt-4 grid grid-cols-3 gap-2 md:gap-3">
                <button className="flex min-h-[72px] flex-col items-center justify-center gap-2 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] text-[#1F2937] transition hover:bg-gray-100 md:min-h-[84px]">
                  <HiOutlinePhone size={18} />
                  <span className="text-[12px] font-medium md:text-[13px]">Call</span>
                </button>

                <button className="flex min-h-[72px] flex-col items-center justify-center gap-2 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] text-[#1F2937] transition hover:bg-gray-100 md:min-h-[84px]">
                  <HiOutlineChatAlt2 size={18} />
                  <span className="text-[12px] font-medium md:text-[13px]">Text</span>
                </button>

                <button className="flex min-h-[72px] flex-col items-center justify-center gap-2 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] text-[#1F2937] transition hover:bg-gray-100 md:min-h-[84px]">
                  <HiOutlineVideoCamera size={18} />
                  <span className="text-[12px] font-medium md:text-[13px]">Video</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FriendDetails