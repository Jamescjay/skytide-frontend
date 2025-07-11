import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Leftbar from "./components/Leftbar";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="appContainer">
        <Leftbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <Rightbar />
      </div>
    </div>
  );
};

export default App;
