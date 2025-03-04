import React from 'react'
import TopPerformerCard from '../components/TopPerformerCard'
import LeadereBoardTable from '../components/LeaderBoardTable'
import PeerForm from '../components/Peerform'
import Terms from '../components/Terms'
const Test = () => {
  return (
   <>
    <div>
      <TopPerformerCard  
      name="John Doe" 
        score="98%" 
        rank="1" 
        image="https://randomuser.me/api/portraits/men/1.jpg"  />
    </div>

    
    <div className="w-3/4 p-6 flex justify-between">
          {/* PeerForm */}
          <div className="w-2/3 p-4">
            <PeerForm />
          </div>

          {/* Terms */}
          <div className="w-1/3 p-4">
            <Terms />
          </div>
        </div>

   </>
  )
}

export default Test
