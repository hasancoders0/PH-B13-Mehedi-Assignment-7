import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import HomeBanner from '../components/HomeBanner'
import FriendsList from '../components/FriendsList'
import Loading from '../components/Loading'

function Home() {
  const friends = useLoaderData()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 600)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  const totalFriends = friends.length
  const onTrack = friends.filter((friend) => friend.status === 'on-track').length
  const needAttention = friends.filter(
    (friend) => friend.status === 'overdue' || friend.status === 'almost due'
  ).length
  const interactionsThisMonth = 12

  return (
    <div className="space-y-10">
      <HomeBanner
        totalFriends={totalFriends}
        onTrack={onTrack}
        needAttention={needAttention}
        interactionsThisMonth={interactionsThisMonth}
      />

      <FriendsList friends={friends} />
    </div>
  )
}

export default Home