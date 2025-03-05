import React from 'react' 
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Card from '../components/Card'
import RecentActivityCardComponent from '../components/RecentActivityCardContainer'

const UserProfile = () => {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar title="Hi, User" />

      {/* Main Layout - Sidebar Fixed + Main Content */}
      <div className="flex">
        {/* Sidebar (Fixed Width, Full Height) */}
        <div className="w-1/5 h-screen bg-white shadow-md">
        {/* <Sidebar
        menuItems={["My Profile", "Peer Scoring", "LeaderBoard"]}
        onLogout={() => console.log("User logged out!")}
      /> */}

<Sidebar
  menuItems={[
    { label: "My Profile", path: "/userprofile" },
    { label: "Peer Scoring", path: "/peerscoring" },
    { label: "LeaderBoard", path: "/leaderboard" },
  ]}
  onLogout={() => console.log("Logged out")}
/>
        </div>

        {/* Main Content - Cards & Recent Activities */}
        <div className="flex-1 p-6">
  {/* Cards Section - Shifted to the Right */}
  <div className="flex justify-center mb-2">
    <div className="grid grid-cols-3 gap-4 p-4 rounded-lg">
      <Card title="PMS Points" value="85" />
      <Card title="Rank" value="9" />
      <Card title="Remaining Points" value="8/10" />
    </div>
  </div>

  {/* Recent Activities Section */}
  <div className=" p-4 rounded-lg ">
    <RecentActivityCardComponent />
  </div>
</div>

      </div>
    </div>
    </div>
  )
}

export default UserProfile
