import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profiles from "./components/Profiles";
import ProfileDetail from "./components/ProfileDetail";

function App() {
  return (
    <Router>
      <div className="bg-gray-200 min-h-screen flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Profiles />} />
          <Route path="/profile/:id" element={<ProfileDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
