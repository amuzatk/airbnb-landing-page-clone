import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Filter from "./components/Filter/Filter";
import Listings from "./components/HomeListing/Listing";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import MapComponent from "./components/Map/MapComponent";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Filter />
        <Routes>
        <Route path="/" element={<Listings />} />
        <Route path="/map" element={<MapComponent onShowListClick={() => {}} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

