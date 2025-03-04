import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Card from '../components/Card'
import RecentActivityCardComponent from '../components/RecentActivityCardContainer'


const PeerScoring = () => {
  return (
    <div>
    <div className="bg-gray-100 min-h-screen">
    {/* Navbar */}
    <Navbar />

    {/* Main Layout - Sidebar Fixed + Main Content */}
    <div className="flex">
      {/* Sidebar (Fixed Width, Full Height) */}
      <div className="w-1/5 h-screen bg-white shadow-md">
        <Sidebar />
      </div>

      {/* Main Content - Cards & Recent Activities */}
      <div className="flex-1 p-6">
        {/* Cards Row */}
        <div className="flex justify-between gap-4 mb-6">
          <Card title="PMS Points" value="85" />
          <Card title="Rank" value="9" />
          <Card title="Remaining Points" value="8/10" />
        </div>

        {/* Recent Activities Section */}
        <RecentActivityCardComponent />
      </div>
    </div>
  </div>
  </div>
      
    
  )
}

export default PeerScoring
