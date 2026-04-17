import {
  HiOutlineUserAdd,
  HiOutlineUserGroup,
  HiOutlineCheckCircle,
  HiOutlineExclamationCircle,
  HiOutlineChatAlt2,
} from "react-icons/hi";

function HomeBanner({
  totalFriends,
  onTrack,
  needAttention,
  interactionsThisMonth,
}) {
  const summaryData = [
    {
      id: 1,
      title: "Total Friends",
      value: totalFriends,
      icon: <HiOutlineUserGroup size={22} />,
    },
    {
      id: 2,
      title: "On Track",
      value: onTrack,
      icon: <HiOutlineCheckCircle size={22} />,
    },
    {
      id: 3,
      title: "Need Attention",
      value: needAttention,
      icon: <HiOutlineExclamationCircle size={22} />,
    },
    {
      id: 4,
      title: "Interactions This Month",
      value: interactionsThisMonth,
      icon: <HiOutlineChatAlt2 size={22} />,
    },
  ];

  return (
    <section className="py-8 md:py-12">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-[#1F2937] md:text-5xl">
          Friends to keep close in your life|||||||||||
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#6B7280] md:text-base">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <button className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#244D3F] px-5 py-3 text-sm font-medium text-white transition hover:opacity-95">
          <HiOutlineUserAdd size={20} />
          Add a Friend
        </button>
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-4">
        {summaryData.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF4F1] text-[#244D3F]">
              {item.icon}
            </div>

            <h2 className="text-3xl font-semibold text-[#1F2937]">
              {item.value}
            </h2>

            <p className="mt-1 text-sm text-[#6B7280]">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeBanner;
