import { Link } from 'react-router-dom'

function FriendCard({ friend }) {
  const statusStyles = {
    overdue: 'bg-[#EF4444] text-white',
    'almost due': 'bg-[#E7A93C] text-white',
    'on-track': 'bg-[#244D3F] text-white',
  }

  return (
    <Link
      to={`/friend/${friend.id}`}
      className="block rounded-[14px] border border-[#E5E7EB] bg-white p-5 text-center shadow-[0_2px_8px_rgba(15,23,42,0.06)] transition hover:-translate-y-1"
    >
      <img
        src={friend.picture}
        alt={friend.name}
        className="mx-auto h-14 w-14 rounded-full object-cover md:h-16 md:w-16"
      />

      <h3 className="mt-4 text-[15px] font-semibold text-[#1F2937] md:text-[16px]">
        {friend.name}
      </h3>

      <p className="mt-2 text-[11px] text-[#94A3B8]">
        {friend.days_since_contact}d ago
      </p>

      <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
        {friend.tags.map((tag, index) => (
          <span
            key={index}
            className="rounded-full bg-[#DDF4E7] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-[#4B5563]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-3">
        <span
          className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-medium ${statusStyles[friend.status]}`}
        >
          {friend.status === 'on-track'
            ? 'On-Track'
            : friend.status === 'almost due'
            ? 'Almost Due'
            : 'Overdue'}
        </span>
      </div>
    </Link>
  )
}

export default FriendCard