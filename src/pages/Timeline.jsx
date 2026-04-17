import { useContext, useState } from 'react'
import TimelineItem from '../components/TimelineItem'
import { TimelineContext } from '../context/TimelineContext'

function Timeline() {
  const { timeline } = useContext(TimelineContext)

  const [filter, setFilter] = useState('all')
  const [sort, setSort] = useState('newest')
  const [search, setSearch] = useState('')

  // 🔹 Filter
  let filteredData =
    filter === 'all'
      ? timeline
      : timeline.filter((item) => item.type === filter)

  // 🔹 Search
  filteredData = filteredData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )

  // 🔹 Sort
  filteredData = filteredData.sort((a, b) => {
    if (sort === 'newest') {
      return new Date(b.date) - new Date(a.date)
    } else {
      return new Date(a.date) - new Date(b.date)
    }
  })

  return (
    <section className="py-6 md:py-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-semibold text-[#1F2937] md:text-4xl">
          Timeline
        </h1>

        {/* Controls */}
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {/* Filter */}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded-xl border border-[#E5E7EB] bg-white px-3 py-2 text-sm"
          >
            <option value="all">All</option>
            <option value="call">Call</option>
            <option value="text">Text</option>
            <option value="video">Video</option>
          </select>

          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-xl border border-[#E5E7EB] bg-white px-3 py-2 text-sm"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>

          {/* Search */}
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-xl border border-[#E5E7EB] bg-white px-3 py-2 text-sm outline-none"
          />
        </div>

        {/* Timeline List */}
        <div className="mt-6 space-y-4">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <TimelineItem key={item.id} item={item} />
            ))
          ) : (
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-8 text-center shadow-sm">
              <p className="text-[#6B7280]">No results found.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Timeline