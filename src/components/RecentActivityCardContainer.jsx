import React from 'react'
import RecentActivityCard from './RecentActivityCard'
const RecentActivityCardComponent = () => {
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
<h2 className="text-2xl font-semibold mb-4">Recent Activities</h2>

<div className="grid grid-cols-3 gap-12 place-items-center">
  <RecentActivityCard name="Tarun" designation="Software Engineer" points="10" />
  <RecentActivityCard name="John Doe" designation="Frontend Developer" points="8" />
  <RecentActivityCard name="Jane Smith" designation="Backend Engineer" points="9" />
  <RecentActivityCard name="Jane Smith" designation="Backend Engineer" points="9" />
  <RecentActivityCard name="Jane Smith" designation="Backend Engineer" points="9" />
  <RecentActivityCard name="Jane Smith" designation="Backend Engineer" points="9" />
</div>
</div>
    </div>
  )
}

export default RecentActivityCardComponent




