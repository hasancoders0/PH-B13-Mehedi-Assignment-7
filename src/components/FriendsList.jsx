import FriendCard from './FriendCard'

function FriendsList({ friends }) {
  return (
    <section className="mt-12">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-[#1F2937]">Your Friends</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </section>
  )
}

export default FriendsList