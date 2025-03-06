import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import LeaderBoardTable from "../components/LeaderBoardTable";
import TopPerformerCard from "../components/TopPerformerCard";

const AdminPage = () => {
  return (
    <div>
      {/* Navbar */}
      {/* <Navbar title="Hi, Admin" /> */}
      <Navbar title="Hi, Admin" email="admin@example.com" />


      <div className="flex mt-14 ml-5">
        {/* Sidebar */}
        <Sidebar
          menuItems={[]}
          onLogout={() => console.log("Admin logged out!")}
          isAdmin={true} 
          
        />

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Cards Row */}
          <div className="flex justify-between gap-4 -mt-9 mb-1">
            {/* <TopPerformerCard
              name="John Doe"
              score="98%"
              rank="1"
              image="https://randomuser.me/api/portraits/men/1.jpg"
            />
            <TopPerformerCard
              name="John Doe"
              score="98%"
              rank="1"
              image="https://randomuser.me/api/portraits/men/1.jpg"
            />
            <TopPerformerCard
              name="John Doe"
              score="98%"
              rank="1"
              image="https://randomuser.me/api/portraits/men/1.jpg"
            /> */}

          </div>

          {/* Leaderboard Table */}
          {/* <LeaderBoardTable /> */}
          <LeaderBoardTable isHR={true}/>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
