import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import LeaderBoardTable from '../components/LeaderBoardTable';
import TopPerformerCard from '../components/TopPerformerCard';



const Leaderboard = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Layout - Sidebar + Leaderboard + Top Performers */}
      <div className="flex">
        
        {/* Sidebar (Left Section) */}
        <div className="w-1/5 h-screen bg-white shadow-md ml-5 mt-13">
          <Sidebar
            menuItems={[
              { label: "My Profile", path: "/userprofile" },
              { label: "Peer Scoring", path: "/peerscoring" },
              { label: "LeaderBoard", path: "/leaderboard" },
            ]}
            onLogout={() => console.log("Logged out")}
          />
        </div>

        {/* Leaderboard Table (Middle Section) */}
        <div className="flex-1 p-1 mb-90 ml-5 mr-6 mt-4">
  <LeaderBoardTable isHR={false} />
</div>


        {/* Top Performers Section (Right Section) */}
        <div className="w-1/5 p-5 mr-9 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#163C78]">Top Performers</h2>

          {/* Top Performer Cards (Stacked) */}
          <TopPerformerCard 
            name="John Doe" 
            score="98%" 
            rank="1" 
            image="https://randomuser.me/api/portraits/men/1.jpg" 
          />
          <TopPerformerCard 
            name="Jane Smith" 
            score="95%" 
            rank="2" 
            image="https://randomuser.me/api/portraits/women/2.jpg" 
          />
          <TopPerformerCard 
            name="Alex Johnson" 
            score="92%" 
            rank="3" 
            image="https://randomuser.me/api/portraits/men/3.jpg" 
          />
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
