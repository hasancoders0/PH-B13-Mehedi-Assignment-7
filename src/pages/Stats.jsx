import { useContext } from 'react'
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import { TimelineContext } from '../context/TimelineContext'

function Stats() {
  const { timeline } = useContext(TimelineContext)

  const textCount = timeline.filter((item) => item.type === 'text').length
  const callCount = timeline.filter((item) => item.type === 'call').length
  const videoCount = timeline.filter((item) => item.type === 'video').length

  const chartData = [
    { name: 'Text', value: textCount },
    { name: 'Call', value: callCount },
    { name: 'Video', value: videoCount },
  ]

  const COLORS = ['#7C3AED', '#244D3F', '#39A96B']

  return (
    <section className="py-6 md:py-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold tracking-tight text-[#1F2937] md:text-5xl">
          Friendship Analytics
        </h1>

        <div className="mt-6 rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm md:p-6">
          <h2 className="text-lg font-semibold text-[#244D3F]">
            By Interaction Type
          </h2>

          <div className="mt-8 flex flex-col items-center justify-center">
            <div className="h-[260px] w-full max-w-[420px] md:h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={90}
                    paddingAngle={6}
                    cornerRadius={6}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={entry.name} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-2 flex flex-wrap items-center justify-center gap-6 text-sm text-[#6B7280]">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#7C3AED]"></span>
                <span>Text</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#244D3F]"></span>
                <span>Call</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#39A96B]"></span>
                <span>Video</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats