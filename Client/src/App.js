import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddObject from "./components/AddObject";
import Objects from "./components/Object/objects"
import About from "./components/About";
import ObjectDetails from "./components/Object/objectDetails"
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddObject />} exact />
          <Route path="/cardinals" element={<Objects />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/cardinals/:id" element={<ObjectDetails />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;