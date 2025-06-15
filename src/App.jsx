import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Leftbar from "./components/Leftbar";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import Rightbar from "./components/Rightbar";
import AuthPage from "./pages/AuthPage";

const App = () => {
  return (
    <div className="app">
      <div className="appContainer">
        <Leftbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<AuthPage type="login" />} />   
          <Route path="/signup" element={<AuthPage type="signup" />} /> 
        </Routes>
        <Rightbar />
      </div>
    </div>
  );
};

export default App;
