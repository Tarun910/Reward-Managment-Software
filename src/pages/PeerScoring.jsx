import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Card from '../components/Card'
import RecentActivityCardComponent from '../components/RecentActivityCardContainer'
import PeerForm from '../components/Peerform'
import Terms from '../components/Terms'


const PeerScoring = () => {
  return (
    <div>
    <div className="bg-white min-h-screen">
    {/* Navbar */}
    <Navbar />
 
    {/* Main Layout - Sidebar Fixed + Main Content */}
    <div className="flex">
      {/* Sidebar (Fixed Width, Full Height) */}
      <div className="w-1/5 h-screen bg-white shadow-md ml-5 mt-13">
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

      <div className="w-3/4 p-6 flex justify-between">
          {/* PeerForm */}
          <div className="w-2/3 p-4 -mt-6 ">
            <PeerForm />
          </div>

          {/* Terms */}
          <div className="w-1/3 pl-2 mt-6">
            <Terms />
          </div>
        </div>


    </div>
  </div>
  </div>
      
    
  )
}

export default PeerScoring
