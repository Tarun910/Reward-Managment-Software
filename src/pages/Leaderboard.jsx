import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Card from '../components/Card'
import RecentActivityCardComponent from '../components/RecentActivityCardContainer'
import TopPerformerCard from '../components/TopPerformerCard'
import LeaderBoardTable from '../components/LeaderBoardTable'
const Leaderboard = () => {
  return (
    
      <div>
      <div className="bg-white min-h-screen">
      {/* Navbar */}
      <Navbar />
      

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
          {/* Cards Row */}
          <div className="flex justify-between gap-4 mb-6">
          <TopPerformerCard  
      name="John Doe" 
        score="98%" 
        rank="1" 
        image="https://randomuser.me/api/portraits/men/1.jpg"  />
          <TopPerformerCard  
      name="John Doe" 
        score="98%" 
        rank="1" 
        image="https://randomuser.me/api/portraits/men/1.jpg"  />
          <TopPerformerCard  
      name="John Doe" 
        score="98%" 
        rank="1" 
        image="https://randomuser.me/api/portraits/men/1.jpg"  />
           

           
          </div>

          {/* Recent Activities Section */}
          {/* <LeaderBoardTable/>
           */}

<LeaderBoardTable isHR={false} />
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Leaderboard
