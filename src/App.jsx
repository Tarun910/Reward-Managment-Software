import React from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
import RecentActivityCardComponent from "./components/RecentActivityCardContainer";
import UserProfile from "./pages/UserProfile";
import PeerScoring from "./pages/PeerScoring";
import Leaderboard from "./pages/Leaderboard";
import TopPerformerCard from "./components/TopPerformerCard";
import Test from "./pages/Test";

const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/peerscoring" element={<PeerScoring />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
};

export default App;
