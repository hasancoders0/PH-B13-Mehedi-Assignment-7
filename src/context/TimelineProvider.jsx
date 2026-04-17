import { useState } from 'react'
import TimelineContext from './timelineContext'

function TimelineProvider({ children }) {
  const [timeline, setTimeline] = useState([])

  const addTimelineEntry = (type, friendName) => {
    const action = type.charAt(0).toUpperCase() + type.slice(1)

    const newEntry = {
      id: Date.now(),
      type,
      title: `${action} with ${friendName}`,
      date: new Date().toISOString(),
    }

    setTimeline((prev) => [newEntry, ...prev])
  }

  return (
    <TimelineContext.Provider value={{ timeline, addTimelineEntry }}>
      {children}
    </TimelineContext.Provider>
  )
}

export default TimelineProvider