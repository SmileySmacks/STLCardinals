import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddVehicle from "./components/AddObject";
import Vehicles from "./components/Object/objects"
import About from "./components/About";
import VehicleDetails from "./components/Object/objectDetails"
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddVehicle />} exact />
          <Route path="/cardinals" element={<Vehicles />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/cardinals/:id" element={<VehicleDetails />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;