import React from "react";
import "./App.css";
import Leftbar from "./components/Leftbar";
import Home from "./pages/Home";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <div className="app">
      <div className="appContainer">
        <Leftbar/>
        <Home/>
        <Rightbar/>
      </div>
    </div>
  );
};

export default App;
