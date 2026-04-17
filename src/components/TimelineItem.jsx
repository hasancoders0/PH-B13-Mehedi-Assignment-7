import {
  HiOutlinePhone,
  HiOutlineChatAlt2,
  HiOutlineVideoCamera,
} from 'react-icons/hi'

function TimelineItem({ item }) {
  const iconMap = {
    call: <HiOutlinePhone size={18} />,
    text: <HiOutlineChatAlt2 size={18} />,
    video: <HiOutlineVideoCamera size={18} />,
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
  }

  return (
    <div className="rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF4F1] text-[#244D3F]">
          {iconMap[item.type]}
        </div>

        <div>
          <h3 className="text-sm font-medium text-[#1F2937]">{item.title}</h3>
          <p className="mt-1 text-sm text-[#6B7280]">{formatDate(item.date)}</p>
        </div>
      </div>
    </div>
  )
}

export default TimelineItem